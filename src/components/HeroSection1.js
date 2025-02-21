import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeroSection1() {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      {/* Section 1: Solar Panels */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection1.title1")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection1.description1")}</p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image
            src="/images/solarPanelRedRoof.jpg"
            alt={t("heroSection1.title1")}
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Section 2: Height Work */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/visinskaDela.jpg"
            alt={t("heroSection1.title2")}
            width={600}
            height={400}
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection1.title2")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection1.description2")}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Electrical Services */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection1.title3")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection1.description3")}</p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image
            src="/images/elektroStoritve.jpg"
            alt={t("heroSection1.title3")}
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Section 4: Welding */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/varjenje.jpg"
            alt={t("heroSection1.title4")}
            width={600}
            height={400}
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection1.title4")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection1.description4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
