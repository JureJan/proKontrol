// src/app/components/Footer.js
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>{t("footer.title")}</h2>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <p>Robert Držan</p>
              <p>T +386 41 649 755</p>
              <p>robert.drzan@pro-kontrol.si</p>
            </div>
            <div className={styles.contactItem}>
              <p>Peter Lederer</p>
              <p>T +386 30 304 620</p>
              <p>peter.lederer@pro-kontrol.si</p>
            </div>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Image src="/images/logoFooter.png" alt="AAMI Corporation Logo" width={527} height={162} className={styles.logo} />
        </div>
      </div>
    </footer>
  );
}