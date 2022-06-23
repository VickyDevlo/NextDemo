import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";
   
   export default function Contact() {
     const [Name, setName] = useState();
     const [Email, setEmail] = useState();
     const [Mobile, setMobile] = useState();
     const [Message, setMessage] = useState();

     const handleSubmit = (e) => {
       e.preventDefault();
       alert("Thank you for your message. It has been sent."); 
       setName(""), setEmail(""), setMobile(""), setMessage("");
     };
     return (
       <div className={styles.container}>
         <Head>
           <title> Demo | contact</title>
         </Head>
         <div className={styles.info}>
            <h1>Get In Touch</h1>
            <label className={styles.address}> 
               Address : Sector - 6, Sarasvati Colony, Rampur, Nagar - 413709.  
            </label>
            <label className={styles.mobile}>  
               Mobile : +91-9845102540
            </label>
           
            <label className={styles.mail}>  
               Email : test@gmail.com
            </label>
           
         </div>
         
         <div className={styles.form}>
           <form onSubmit={handleSubmit}>
             <label> Name</label> <br />
             <input
               type="text"
               id="name"
               name="name"
               placeholder="Name"
               value={Name}
               onChange={(e) => setName(e.target.value)}
               required
             /> 
             <br />
             <label>Email</label> <br />
             <input
               type="email"
               id="email"
               name="email"
               placeholder="Email"
               value={Email}
               onChange={(e) => setEmail(e.target.value)}
               required
             /> 
             <br />
             <label>Mobile No.</label> <br />
             <input
               type="text"
               id="mobile"
               name="mobile"
               placeholder="Mobile No"
               minLength="10"
               maxLength="10"
               value={Mobile}
               onChange={(e) => setMobile(e.target.value)}
               required
             /> 
             <br />
             <label>Message</label> <br />
             <textarea
               type="text"
               id="msg"
               name="Message"
               placeholder="Write Something here..."
               value={Message}
               onChange={(e) => setMessage(e.target.value)}
                
             /> 
             <br />
             <button type="submit">Submit</button>
           </form>
         </div>
       </div>
     );
   } 
   