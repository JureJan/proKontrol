import styles from "../styles/About.module.css";
import { useTranslation } from "react-i18next";

export default function About() {
  
  const { t } = useTranslation(); // ✅ No need for "common" namespace since it's the default

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <p>
          <strong>{t("")}</strong> {t("about.description")}
        </p>
      </div>
    </section>
  );
}
