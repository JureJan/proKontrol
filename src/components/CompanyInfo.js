import styles from "../styles/CompanyInfo.module.css";
import { useTranslation } from "react-i18next";

export default function CompanyInfo() {
  const { t } = useTranslation();

  return (
    <section className={styles.companyInfo}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>{t("companyInfo.title")}</h2>
          <p>{t("companyInfo.name")}</p>
          <p>{t("companyInfo.addressLine1")}</p>
          <p>{t("companyInfo.addressLine2")}</p>
        </div>
        <div className={styles.right}>
          <p>{t("companyInfo.iban")}</p>
          <p>{t("companyInfo.taxNumber")}</p>
          <p>{t("companyInfo.registrationNumber")}</p>
        </div>
      </div>
    </section>
  );
}
