import styles from "../styles/HeroSection.module.css";
import Image from "next/image";

export default function HeroSection1() {
  return (
    <section className={styles.heroSection}>
      {/* Section 1: Image on Right */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Sončne elektrarne</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Ena izmed naših dejavnosti je montaža sončnih elektrarn. Fotovoltaična elektrarna (tudi sončna elektrarna) je elektrarna, ki izkorišča obnovljivo sončno energijo za proizvodnjo električne energije. Veljajo za ekonomični, zanesljiv in enostaven vir električne energije, ki temelji na obnovljivemu viru – energiji sonca. Elektrarna s pomočjo solarnih modulov pretvarja sončno sevanje v električni tok in jo nato posreduje preko električnega omrežja porabnikom. Povprečna delovna doba elektrarne traja 30 let. Ujemite moč sonca in jo pretvorite v okolju prijazno električno energijo.
         </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/images/solarPanelRedRoof.jpg" alt="Solar Panels" width={600} height={400} />
        </div>
      </div>

      {/* Section 2: Image on Left */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image src="/images/visinskaDela.jpg" alt="Height Work" width={600} height={400} />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Višinska dela</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Včasih se zgodi, da je potrebno na mestu, kamor dvižne ploščadi ne sežejo opraviti neko delo ali popravilo. Tam se prične pravo delovišče za ljudi, vajenih višine in nenavadnih pogojev dela, ki vključujejo razne nevarnosti, kot so pomanjkanje kisika, izreden prah, vročina, možnost udara strele in druge objektivne nevarnosti. Zaradi dolgoletnih izkušenj v alpinizmu in posledično v težkih pogojih dela, se tu počutimo kot doma.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Image on Right */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Električne storitve</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Nudimo vam celovito električarsko storitev, kar pomeni izdelava celotne elektroinštalacije na novo, ali pa popravilo stare. Po želji vam zmontiramo hišni alarm in vse gospodinjske aparate, ki so stalno priključeni na elektriko.
          </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/images/elektroStoritve.jpg" alt="Electric Services" width={600} height={400} />
        </div>
      </div>

      {/* Section 4: Image on Left */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image src="/images/varjenje.jpg" alt="Welding" width={600} height={400} />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Varjenje</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Izvajamo popravila različnih kovinskih elementov in izdelkov ter izdelujemo produkte iz barvnih in nebarvnih kovin po vaših željah. Ukvarjamo se tudi z varjenjem na terenu, kar pomeni, da pridemo na vaš dom ali drugo lokacijo, kjer izvedemo razna popravila. V naši ponudbi so storitve varjenja jekla, aluminija ter nerjavečega jekla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
