// src/app/components/VideoSection2.js
import styles from "../styles/VideoSection.module.css";

export default function VideoSection2() {
  return (
    <section className={styles.videoSection}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src="https://www.tgs.si/dev/prokontrol/wp-content/uploads/2021/05/Stisnjen.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}