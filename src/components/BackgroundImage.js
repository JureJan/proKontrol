// src/app/components/BackgroundImage.js
import styles from "../styles/BackgroundImage.module.css";
import Image from "next/image";

export default function BackgroundImage() {
  return (
    <section className={styles.backgroundImage}>
<Image
  src="/images/00012.png"
  alt="Background"
  fill
  style={{ objectFit: "cover" }}
  priority
/>
    </section>
  );
}