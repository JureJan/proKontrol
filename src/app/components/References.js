// src/app/components/References.js
import styles from "../styles/References.module.css";
import Image from "next/image";

const references = [
  { src: "/images/ref/pering2.png", alt: "Pering" },
  { src: "/images/ref/aam.png", alt: "AAM" },
  { src: "/images/ref/4seen2.png", alt: "4SEEN" },
  { src: "/images/ref/aami.png", alt: "AAMI" },
  { src: "/images/ref/lokus2.png", alt: "Lokus" },
  { src: "/images/ref/megagraf2.png", alt: "Megagraf" },
  { src: "/images/ref/artexpo2.png", alt: "Art Expo" },
];

export default function References() {
  return (
    <section className={styles.references}>
      <h2 className={styles.title}>Reference & Partnerji</h2>
      <div className={styles.grid}>
        {references.map((ref, index) => (
          <div key={index} className={styles.logoContainer}>
            <Image src={ref.src} alt={ref.alt} width={250} height={150} className={styles.logo} />
          </div>
        ))}
      </div>
    </section>
  );
}