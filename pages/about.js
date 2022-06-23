import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Demo | about</title>
      </Head>

      <Image src="/../public/images/Logo.png" width={400} height={400} />
      <p className={styles.para}>
        We at Shopin India aim to provide the most convenient way to shop trendy
        jewellery online. We provide exclusive jewellery pieces and accessories
        at pocket friendly prices. Your satisfaction is our priority and your
        trust is our responsibility.{" "}
      </p>
    </div>
  );
}
