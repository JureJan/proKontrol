// src/app/components/Header.js
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Header() {
  const { t, i18n } = useTranslation(); // ✅ Access translations
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // ✅ Switch language
    setIsOpen(false); // ✅ Close dropdown
  };

  return (
    <header className={styles.header}>
      {/* Video Background */}
      <video autoPlay loop muted playsInline className={styles.video}>
        <source
          src="https://www.tgs.si/dev/prokontrol/wp-content/uploads/2021/05/Prokontrol-Final.m4v"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Social Media Icons */}
      <div className={styles.icons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/fb.png" alt="Facebook" width={40} height={40} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/ln.png" alt="LinkedIn" width={40} height={40} className={styles.icon} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/ig.png" alt="Instagram" width={40} height={40} className={styles.icon} />
        </a>
      </div>

      {/* Language Switcher */}
      <div className={styles.languageSwitcher}>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.languageButton}>
          🌍 {i18n.language.toUpperCase()} ▼
        </button>
        {isOpen && (
          <ul className={styles.languageDropdown}>
            {["sl", "en", "de", "it"].map((lng) => (
              <li key={lng} onClick={() => changeLanguage(lng)}>
                {lng.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </div>

    </header>
  );
}
