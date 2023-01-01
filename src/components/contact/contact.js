import React, {useRef, useState} from "react";
import "./contact.css"
import {TbMessageDots} from "react-icons/tb"
import {AiOutlineMail} from "react-icons/ai"
import {BiMobileAlt} from "react-icons/bi"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const form = useRef(null)
    const [resultMessage, setResultMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()

        setResultMessage("")
        const params = {name: form.current.name.value, email: form.current.email.value, message: form.current.message.value}

        if(params.name.length == 0 || params.email.length == 0 || params.message.length == 0) {
            setResultMessage("Field should not be empty")
        } else {
            emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                params,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    //console.log(result.text)
                    setResultMessage("Message sent")
                },
                (error) => {
                    console.log(error.text)
                    setResultMessage("Message not sent. Error: " + error.text)
                }
            )
    
            e.target.reset()
        }
        
        
    }

    return (
        <section className="container" id="contact">
            <h2 className="text-light"><TbMessageDots/></h2>
            <h1>Contact</h1>
            <div className="contact-container">
                <div className="personal-container">
                    <div>
                        <AiOutlineMail />
                        <div>
                            <h4>Email</h4>
                            <p>adam.vincze01@gmail.com</p>
                        </div>
                        <a href="mailto: adam.vincze01@gmail.com">Send a message</a>
                    </div>
                    <div>
                        <BiMobileAlt />
                        <div>
                            <h4>Mobile</h4>
                            <p>+36304476315</p>
                        </div>
                        <a href="tel: +36304476315">Call me</a>
                    </div>
                </div>
                <div>
                    <form ref={form} className="form-container" onSubmit={sendEmail}>
                        <input className="outlined" type="text" name="name" placeholder="Your Name" required/>
                        <input className="outlined" type="email" name="email" placeholder="Your Email" required/>
                        <textarea className="outlined" name="message" placeholder="Your Message" rows="5" required/>
                        <input className="btn btn-primary" type="submit" value="Send Message"/>
                    </form>
                    <span><p style={{textAlign: "left"}}>{resultMessage}</p></span>
                </div>
            </div>
            
        </section>
    ) 
}

export default Contact