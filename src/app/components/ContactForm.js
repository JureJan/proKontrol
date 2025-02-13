"use client"; // Ensure it's a client component

import styles from "../styles/ContactForm.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null); // Form reference
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Reset message before sending

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(response => {
      console.log("✅ Email sent successfully", response);
      setSuccessMessage("Sporočilo je bilo uspešno poslano!"); // Set success message
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    })
    .catch(error => {
      console.error("❌ Error sending email", error);
      setSuccessMessage("Napaka pri pošiljanju. Poskusite znova.");
    });
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Kontaktirajte nas</h2>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>} {/* Display success message */}
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Vaše ime"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Vaš e-mail"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Vaše sporočilo"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>Pošlji</button>
      </form>
    </section>
  );
}
