import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Demo | home </title>
      </Head>
      <div>
        <h1 className={styles.TopHeading}>Our Categaries</h1>
        <div className={styles.Section1}>
          <p>
            An Earring is a piece of jewelry attached to the ear via a piercing
            in the earlobe or another external part of the ear. Earrings have
            been worn by people in different civilizations and historic periods,
            often with cultural significance.
          </p>
          <div className={styles.img}>
            <Image
              src="/../public/images/Earring.jpg"
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className={styles.Section1}>
          <div className={styles.img}>
            <Image
              src="/../public/images/Necklace.webp"
              width={350}
              height={350}
            />
          </div>
          <p>
            A necklace is an article of jewellery that is worn around the neck.
            Necklaces may have been one of the earliest types of adornment worn
            by humans. These are most often rendered in precious metals such as
            gold, silver, and platinum. Necklaces often have additional
            attachments suspended or inset into the necklace itself.
          </p>
        </div>
        <div className={styles.Section1}>
          <p>
            A bracelet is an article of jewellery that is worn around the wrist.
            Bracelets may serve different uses, such as being worn as an
            ornament. When worn as ornaments, bracelets may have a supportive
            function to hold other items of decoration, such as charms.
          </p>
          <div className={styles.img}>
            <Image
              src="/../public/images/Bracelet .webp"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
