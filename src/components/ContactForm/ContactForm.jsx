import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [name,setName] = useState("Mrinank")
  const [email,setEmail] = useState("mrinank2484@gmail.com")
  const [text,setText] = useState("hello world")


  
  const onSubmit =(event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value); 

    console.log("name",name);
    console.log("email",email);
    console.log("text",text);
  }
  
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} />
            </div>
            <div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>} />
            </div>
            <form 
            onSubmit={onSubmit}
            >
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email"/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" rows="8"/>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "end"

              }}>
              <Button text="SUBMIT BUTTON"/>
              </div>
              <div>
                {
                  name + " " + email + " " + text
                }
              </div>
            </form>
        </div>   
        <div className={styles.contactImages}> 
          <img src="./images/Service 24_7-pana 1.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm;