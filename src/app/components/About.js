import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <p>
          <strong>PRO-KONTROL d.o.o.</strong> je razmeroma mlado podjetje, vendar pa se kljub temu
          naša ekipa ponaša z dolgoletnimi izkušnjami na področju vzdrževanja objektov,
          gradbeništva in ostalih storitev, ki jih ponujamo. S svojim profesionalnim delom
          in izjemno kratkim odzivnim časom svojim strankam nudimo storitve kot so
          montaža sončnih elektrarn, delo na višini, elektro storitve, varjenje, vzdrževalna dela,
          suha gradnja, mizarstvo in popravila. Vabljeni k ogledu naše predstavitve
          ter naročilu naših storitev – jamčimo vam, da ne boste razočarani.
        </p>
      </div>
    </section>
  );
}
