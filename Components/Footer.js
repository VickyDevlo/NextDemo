import styles from "../styles/Home.module.css";
import Link from 'next/link'
import { CallRounded, HomeRounded, MailRounded  } from '@material-ui/icons' 

export default function Footer() { 
  return (
    <div>

      <div className={styles.FooterWrapper}>
        <div className={styles.footertop}>
          <div className={styles.footmenu}>
            <h3> Categories</h3>

            <ul className={styles.MenuList} >
              
              <li> <Link href='/anklets'> Anklets </Link> </li>
              <li> <Link href='/bracelets'> Bracelets </Link> </li>
              <li> <Link href='/earrings'> Earrings </Link> </li>
              
            </ul>
          </div>
          <div className={styles.footmenu}>
            <h3> Menu</h3>
            <ul>
            <li> <Link href='/'> Home </Link> </li>
            <li> <Link href='/about'> About Us </Link> </li>
            <li> <Link href='/contact'> Contact Us </Link> </li>
            <li> <Link href='/termsandconditions'> Terms and conditions </Link> </li>
            </ul>
          </div>
           
          <div className={styles.footmenu}>
            <h3>Contact Us </h3>

            <ul  >
              <li> <HomeRounded /> <span className={styles.home}>Sector- 6,Sarasvati Colony, Rampur, Nagar - 413709. </span>   </li>
              <li> <CallRounded /><span className={styles.call}> +91-9845102540  </span></li>
            <li> 
                <MailRounded />
              <Link href='/mail'>
               <a className={styles.mailId}> 
               info.shopinindia@gmail.com
               </a>
                </Link>
                 </li>
              <li>  </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
