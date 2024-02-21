"use client";

import { useEffect, useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  console.log("🚀 ~ ContactForm ~ name:", name);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="contact-form is-full-width">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column text-col is-12 is-6-desktop">
            <div className="title h1">Contact Us</div>
            <p className="text">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <div className="column form-col is-12 is-5-desktop is-offset-1-desktop">
            <div className="field">
              <div className="control">
                <input
                  className={`input ${name ? "has-value" : ""}`}
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${email ? "has-value" : ""}`}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className={`input ${phone ? "has-value" : ""}`}
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                {/* textarea not expanded */}
                <textarea
                    className={`textarea ${message ? "has-value" : ""}`}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ resize: "none" }}
                />
              </div>
            </div>
            <div className="field">
              <div className="control is-flex btn-wrapper">
                <div className="btn onDark">submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
