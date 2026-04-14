"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./FadeIn";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot: if this hidden field is filled, it's a bot — silently drop
    const honeypot = (
      formRef.current.elements.namedItem("company") as HTMLInputElement | null
    )?.value;
    if (honeypot) {
      setStatus("sent");
      formRef.current.reset();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg("Email service is not configured. Please email me directly.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(message);
    }
  };

  const buttonLabel =
    status === "sending"
      ? "Sending…"
      : status === "sent"
      ? "Message Sent!"
      : status === "error"
      ? "Try Again"
      : "Send Message";

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="contact-wrapper">
          <FadeIn className="contact-info">
            <p className="section-label">Get in touch</p>
            <h3>Let&apos;s build something together</h3>
            <p>
              My inbox is always open - whether it&apos;s a project to build
              together, a research collaboration, or suggestions, just drop me
              a mail.
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
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot — hidden from real users, bots fill it */}
              <div aria-hidden="true" className="honeypot">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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

              {status === "error" && (
                <p className="form-error" role="alert">
                  {errorMsg || "Couldn't send — please try again or email me directly."}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: status === "sent" ? "#22c55e" : undefined,
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "wait" : "pointer",
                }}
              >
                {buttonLabel}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
