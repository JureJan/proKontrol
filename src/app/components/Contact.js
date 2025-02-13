"use client"; // Add this at the top

import styles from "../styles/Contact.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("common");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((result) => {
        console.log("Email successfully sent!");
      }, (error) => {
        console.log("Email failed to send:", error);
      });
  };

  return (
    <section className={styles.contact}>
      <h2>{t("contact_us")}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder={t("name")} required />
        <input type="email" name="email" placeholder={t("email")} required />
        <textarea name="message" placeholder={t("message")} required></textarea>
        <button type="submit">{t("send")}</button>
      </form>
    </section>
  );
}
