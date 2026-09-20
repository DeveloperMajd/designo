# Designo - run the Strapi backend and the Next.js frontend locally.
#
#   make help      list all targets
#   make dev       backend + frontend together (Ctrl+C stops both)
#
# Written for GNU Make 3.81 (the version macOS ships).

SHELL := /bin/bash
.DEFAULT_GOAL := help

BACKEND_DIR  := designo_backend
FRONTEND_DIR := designo_frontend

BACKEND_PORT  ?= 1337
FRONTEND_PORT ?= 3000

# Strapi 4.20 only supports Node 18-20 (backend package.json "engines"), and the
# installed better-sqlite3 binary crashes on Node 22+. Both apps run on this version.
NODE_VERSION ?= 20

# The frontend reads NEXT_PUBLIC_API_URL. Setting it in the process environment beats
# the tracked frontend .env, which points at the production backend.
API_URL ?= http://localhost:$(BACKEND_PORT)/api

# Local dev uses SQLite, not the Postgres settings a backend .env may contain: those
# point at localhost:5432, which may belong to something else on the machine. Strapi
# reads the DATABASE_* variables from the process environment before .env (dotenv never
# overrides), so nothing in .env has to change.
#   SEED_DB  is the tracked content snapshot; it is only ever copied, never opened.
#   LOCAL_DB is the working copy. *.sqlite is already in the backend .gitignore.
SEED_DB  := .tmp/data.db
LOCAL_DB ?= .tmp/local.sqlite

BACKEND_ENV := PORT=$(BACKEND_PORT) DATABASE_CLIENT=sqlite DATABASE_FILENAME=$(LOCAL_DB)

# `nvm` is a shell function, so it has to be sourced inside every recipe. If nvm is not
# installed the current node is used, and the version check below reports a mismatch.
# The NVM_DIR path can contain spaces (Herd), hence the quoting.
USE_NODE = NVM_DIR="$${NVM_DIR:-$$HOME/.nvm}"; \
	if [ -s "$$NVM_DIR/nvm.sh" ]; then \
		. "$$NVM_DIR/nvm.sh" >/dev/null 2>&1; \
		nvm use $(NODE_VERSION) >/dev/null || exit 1; \
	fi; \
	node -e 'var m=+process.versions.node.split(".")[0]; if(m<18||m>20){console.error("Node "+process.version+" is not supported by Strapi 4.20 (needs 18-20). Install Node $(NODE_VERSION): nvm install $(NODE_VERSION)"); process.exit(1)}' || exit 1

BACKEND_DEPS  := $(BACKEND_DIR)/node_modules/.yarn-integrity
FRONTEND_DEPS := $(FRONTEND_DIR)/node_modules/.yarn-integrity
BACKEND_DB    := $(BACKEND_DIR)/$(LOCAL_DB)

.PHONY: help install dev backend frontend db-reset _frontend-when-backend-ready

help: ## Show this help
	@echo "Designo local development"
	@echo
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | awk -F':.*## ' '{printf "  make %-10s %s\n", $$1, $$2}'
	@echo
	@echo "Backend  http://localhost:$(BACKEND_PORT)  (admin: /admin)"
	@echo "Frontend http://localhost:$(FRONTEND_PORT)"
	@echo "Override with e.g. make dev BACKEND_PORT=1338 FRONTEND_PORT=3001"

install: $(BACKEND_DEPS) $(FRONTEND_DEPS) ## Install dependencies for both apps

# Re-runs only when package.json or yarn.lock change. The touch is needed because yarn
# leaves .yarn-integrity untouched on a no-op install, which would look stale to make.
$(BACKEND_DEPS): $(BACKEND_DIR)/package.json $(BACKEND_DIR)/yarn.lock
	@$(USE_NODE); cd $(BACKEND_DIR) && yarn install --frozen-lockfile && touch node_modules/.yarn-integrity

$(FRONTEND_DEPS): $(FRONTEND_DIR)/package.json $(FRONTEND_DIR)/yarn.lock
	@$(USE_NODE); cd $(FRONTEND_DIR) && yarn install --frozen-lockfile && touch node_modules/.yarn-integrity

# Order-only prerequisite: created once from the seed, never refreshed just because the
# seed changed, so local edits are not overwritten by accident.
$(BACKEND_DB): | $(BACKEND_DIR)/$(SEED_DB)
	@mkdir -p $(dir $@)
	@cp $(BACKEND_DIR)/$(SEED_DB) $@
	@echo "Created $@ from $(SEED_DB)"

dev: $(BACKEND_DEPS) $(FRONTEND_DEPS) $(BACKEND_DB) ## Run backend + frontend together (Ctrl+C stops both)
	@$(MAKE) --no-print-directory -j2 backend _frontend-when-backend-ready

backend: $(BACKEND_DEPS) $(BACKEND_DB) ## Run only the Strapi backend
	@$(USE_NODE); cd $(BACKEND_DIR) && $(BACKEND_ENV) yarn dev

frontend: $(FRONTEND_DEPS) ## Run only the Next.js frontend (needs the backend running)
	@$(USE_NODE); cd $(FRONTEND_DIR) && NEXT_PUBLIC_API_URL=$(API_URL) yarn dev -p $(FRONTEND_PORT)

# Pages are fetched from Strapi on every request in dev, and the page component throws
# when the fetch returns null, so hold the frontend back until Strapi answers.
# The first backend start also builds the admin panel and can take a minute or two.
_frontend-when-backend-ready:
	@echo "[frontend] waiting for the backend on port $(BACKEND_PORT)..."
	@until curl -sf -o /dev/null http://localhost:$(BACKEND_PORT)/_health; do sleep 2; done
	@echo "[frontend] backend is up"
	@$(MAKE) --no-print-directory frontend

db-reset: ## Discard local backend changes: recreate the local DB from the tracked snapshot
	@rm -f $(BACKEND_DB)
	@$(MAKE) --no-print-directory $(BACKEND_DB)
