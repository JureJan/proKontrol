// src/app/components/CompanyInfo.js
import styles from "../styles/CompanyInfo.module.css";

export default function CompanyInfo() {
  return (
    <section className={styles.companyInfo}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Podjetje</h2>
          <p>PRO-KONTROL d.o.o.</p>
          <p>Kresniški vrh 49,</p>
          <p>1281 Kresnice</p>
        </div>
        <div className={styles.right}>
          <p>TRR: SI56 3300 0001 0254 055</p>
          <p>Davčna številka: SI 11596759</p>
          <p>Matična: 8502528000</p>
        </div>
      </div>
    </section>
  );
}