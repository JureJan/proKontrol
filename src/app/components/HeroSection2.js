import styles from "../styles/HeroSection.module.css";
import Image from "next/image";

export default function HeroSection2() {
  return (
    <section className={styles.heroSection}>
      {/* Section 1: Image on Right */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Popravila</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Na daleč je ta storitev podobna upravljanju zgradb, vendar je mnogo bolj prijazna in predvsem transparentna. Gre enostavno za to, da smo 24/7 na voljo stranki, s katero imamo sklenjeno pogodbo. Pogodba je brez obveznosti in ima zgolj to funkcijo, da stranka ve, na koga se obrne, kadar gre kaj narobe in je potrebna hitra intervencija.
            </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/images/storitveHisnik.jpg" alt="Repairs" width={600} height={400} />
        </div>
      </div>

      {/* Section 2: Image on Left */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image src="/images/notranjaVzdrzevalnaDela.jpg" alt="Maintenance" width={600} height={400} />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Vzdrževalna dela</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Ena izmed naših dejavnosti so tudi mala hišna popravila, ki se tičejo tako notranjih vzdrževalnih del vašega doma, kot tudi zunanjosti. Tako vam poleg vseh mizarskih storitev nudimo tudi slikopleskarska dela, položimo keramiko in kamen ter vse vrste talnih oblog. Zamenjamo ali popravimo vam kljuke na vratih in oknih, dotrajane vodovodne pipe in odpravimo puščanje sifonov. Ste morda izgubili ključe? Ni panike. Brez škode vlomimo v vaše zaklenjeno stanovanje ali hišo.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Image on Right */}
      <div className={`${styles.sectionWrapper} ${styles.rightImage}`}>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Suha gradnja</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Material prihodnosti. Gips je človeku prijazen material tudi zato, ker ima isti PH kot človek. Suho montažna gradnja predelnih sten, stropov ali mansard se dandanes vse bolj uveljavlja, predvsem zaradi hitrosti izdelave, cenovne ugodnosti in ne nazadnje zaradi enostavnosti izvedbe. Suha gradnja ima praktično neomejene možnosti snovanja oblik. V našem podjetju se z veseljem prilagajamo željam naročnika. Bolj kot je naročilo zahtevno, večji izziv nam predstavlja delo.
           </p>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <Image src="/images/suhaGradnja.jpg" alt="Drywall" width={600} height={400} />
        </div>
      </div>

      {/* Section 4: Image on Left */}
      <div className={`${styles.sectionWrapper} ${styles.leftImage}`}>
        <div className={styles.imageColumn}>
          <Image src="/images/mizarstvo.jpg" alt="Carpentry" width={600} height={400} />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.titleContainer}>
            <h2>Mizarstvo</h2>
          </div>
          <div className={styles.textContainer}>
            <p>
            Ponujamo vam izdelavo pohištva po meri. Beseda ‘’tipsko’’ nam je tuja. Izdelujemo spalnice, predsobe, otroške sobe, delovne sobe in drugo pohištvo po naročilu in željah naročnika. Montiramo tudi že kupljeno pohištvo in vam staro pohištvo odpeljemo na deponijo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
