"use client";

import useWindowSize from "../hooks/useWindowSize";

import P1Desk from "../assets/home/desktop/image-web-design-large.jpg";
import P2Desk from "../assets/home/desktop/image-app-design.jpg";
import P3Desk from "../assets/home/desktop/image-graphic-design.jpg";

import P1Tab from "../assets/home/tablet/image-web-design.jpg";
import P2Tab from "../assets/home/tablet/image-app-design.jpg";
import P3Tab from "../assets/home/tablet/image-graphic-design.jpg";

import P1Mob from "../assets/home/mobile/image-web-design.jpg";
import P2Mob from "../assets/home/mobile/image-app-design.jpg";
import P3Mob from "../assets/home/mobile/image-graphic-design.jpg";

import Image from "next/image";

import Arrow from "../assets/shared/desktop/icon-right-arrow.svg";
import Link from "next/link";

type gridType = "Three-grid" | "Two-grid";

interface projectsGridProp {
  data: gridType;
}
export const ProjectsGrid = ({ data }: projectsGridProp) => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024;

  const gridJSX = (
    <>
      {data === "Three-grid" ? (
        <div className="tile is-ancestor ">
          <div className="tile is-parent">
            <Link
              href="/webdesign"
              target="_blank"
              className="tile is-child tile-item"
            >
              <div className="tile-image">
                <Image
                  src={isMobile ? P1Mob : isTablet ? P1Tab : P1Desk}
                  alt="web design"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                  }}
                />
              </div>
              <div className="tile-content">
                <div className="title h2">web design</div>
                <div className="link">
                  <span>view projects</span>
                  <span className="arrow">
                    <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="tile is-parent is-vertical">
            <Link href="#" className="tile is-child tile-item">
              <div className="tile-image">
                <Image
                  src={isMobile ? P2Mob : isTablet ? P2Tab : P2Desk}
                  alt="web design"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                  }}
                />
              </div>
              <div className="tile-content">
                <div className="title h2">app design</div>
                <div className="link">
                  <span>view projects</span>
                  <span className="arrow">
                    <Arrow />
                  </span>
                </div>
              </div>
            </Link>
            <Link href="#" className="tile is-child tile-item">
              <div className="tile-image">
                <Image
                  src={isMobile ? P3Mob : isTablet ? P3Tab : P3Desk}
                  alt="web design"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                  }}
                />
              </div>
              <div className="tile-content">
                <div className="title h2">graphic design</div>
                <div className="link">
                  <span>view projects</span>
                  <span className="arrow">
                    <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="tile is-ancestor ">
          <div className="tile is-parent">
            <Link href="#" className="tile is-child tile-item">
              <div className="tile-image">
                <Image
                  src={isMobile ? P2Mob : isTablet ? P2Tab : P2Desk}
                  alt="web design"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                  }}
                />
              </div>
              <div className="tile-content">
                <div className="title h2">app design</div>
                <div className="link">
                  <span>view projects</span>
                  <span className="arrow">
                    <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="tile is-parent">
            <Link href="#" className="tile is-child tile-item">
              <div className="tile-image">
                <Image
                  src={isMobile ? P3Mob : isTablet ? P3Tab : P3Desk}
                  alt="web design"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                  }}
                />
              </div>
              <div className="tile-content">
                <div className="title h2">graphic design</div>
                <div className="link">
                  <span>view projects</span>
                  <span className="arrow">
                    <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );

  return (
    <section className="projects-grid">
      <div className="container">{gridJSX}</div>
    </section>
  );
};
