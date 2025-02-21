import styles from "../styles/HeroSection.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeroSection2() {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      {/* Section 1: Repairs */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection2.title1")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection2.description1")}</p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image
            src="/images/storitveHisnik.jpg"
            alt={t("heroSection2.title1")}
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Section 2: Maintenance Work */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/notranjaVzdrzevalnaDela.jpg"
            alt={t("heroSection2.title2")}
            width={600}
            height={400}
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection2.title2")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection2.description2")}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Dry Construction */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection2.title3")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection2.description3")}</p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image
            src="/images/suhaGradnja.jpg"
            alt={t("heroSection2.title3")}
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Section 4: Carpentry */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/mizarstvo.jpg"
            alt={t("heroSection2.title4")}
            width={600}
            height={400}
          />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>{t("heroSection2.title4")}</h2>
          </div>
          <div className={styles.textContainer}>
            <p>{t("heroSection2.description4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
