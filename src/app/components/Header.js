// src/app/components/Header.js
import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="https://www.tgs.si/dev/prokontrol/wp-content/uploads/2021/05/Prokontrol-Final.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
    </header>
  );
}