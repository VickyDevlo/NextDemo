import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Demo | home </title> 
      </Head>
      <div >
        Home Page
        <p>Our aim is to provide adorable jewellery in very affordable prices by building a person touch with our customers.</p>
    </div>
    </div> 
  );
} 