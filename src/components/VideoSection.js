// src/app/components/VideoSection.js
import styles from "../styles/VideoSection.module.css";

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="https://www.pro-kontrol.si/wp-content/uploads/2021/05/78-A292a2ewmtaxndiwna1.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}