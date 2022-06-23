import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Demo | home </title> 
      </Head>
      <div >
      <Carousel>
        <Carousel.Item interval={1500}>
        <Image src="/../public/images/banner.jpg" width={1920} height={400} />  
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <Image src="/../public/images/banner.jpg" width={1920} height={400} />
           
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <Image src="/../public/images/banner.jpg" width={1920} height={400} />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <Image src="/../public/images/banner.jpg" width={1920} height={400} />
        </Carousel.Item>
      </Carousel>
      
    </div>
    </div> 
  );
} 