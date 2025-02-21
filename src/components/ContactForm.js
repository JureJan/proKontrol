"use client";

import styles from "../styles/ContactForm.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("✅ Email sent successfully", response);
        setSuccessMessage(t("contactForm.success"));
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ Error sending email", error);
        setSuccessMessage(t("contactForm.error"));
      });
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>{t("contactForm.title")}</h2>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t("contactForm.namePlaceholder")}
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("contactForm.emailPlaceholder")}
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder={t("contactForm.messagePlaceholder")}
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          {t("contactForm.submitButton")}
        </button>
      </form>
    </section>
  );
}
