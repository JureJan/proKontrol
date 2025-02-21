import styles from "../styles/References.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function References() {
  const { t } = useTranslation();

  const references = [
    { src: "/images/ref/pering2.png", alt: t("references.pering") },
    { src: "/images/ref/aam.png", alt: t("references.aam") },
    { src: "/images/ref/4seen2.png", alt: t("references.4seen") },
    { src: "/images/ref/aami.png", alt: t("references.aami") },
    { src: "/images/ref/lokus2.png", alt: t("references.lokus") },
    { src: "/images/ref/megagraf2.png", alt: t("references.megagraf") },
    { src: "/images/ref/artexpo2.png", alt: t("references.artexpo") },
  ];

  return (
    <section className={styles.references}>
      <h2 className={styles.title}>{t("references.title")}</h2>
      <div className={styles.grid}>
        {references.map((ref, index) => (
          <div key={index} className={styles.logoContainer}>
            <Image
              src={ref.src}
              alt={ref.alt}
              width={250}
              height={150}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
