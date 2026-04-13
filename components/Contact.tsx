"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      (e.target as HTMLFormElement).reset();
    }, 2500);
  };

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="contact-wrapper">
          <FadeIn className="contact-info">
            <p className="section-label">Contact</p>
            <h3>Let&apos;s Work Together</h3>
            <p>
              I&apos;m always open to discussing AI projects, research
              collaborations, or new opportunities. Feel free to reach out!
            </p>
            <div className="contact-links">
              <a
                href="mailto:sengnupan.kumgyi@gmail.com"
                className="contact-link"
              >
                <span className="contact-link-icon">✉</span>
                sengnupan.kumgyi@gmail.com
              </a>
              <a href="tel:+650645053702" className="contact-link">
                <span className="contact-link-icon">☎</span>
                +65-064-505-3702
              </a>
              <a
                href="https://linkedin.com/in/sengnupankumgyi/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-link-icon">in</span>
                linkedin.com/in/sengnupankumgyi
              </a>
              <a
                href="https://github.com/Ksengnupan"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-link-icon">⌖</span>
                github.com/Ksengnupan
              </a>
            </div>
          </FadeIn>

          <FadeIn className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: sent ? "#4CAF50" : undefined,
                }}
              >
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
