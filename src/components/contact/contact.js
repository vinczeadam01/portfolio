import React, {useRef} from "react";
import "./contact.css"
import {TbMessageDots} from "react-icons/tb"

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        console.log(form)
    }

    return (
        <section className="container" id="contact">
            <h2 className="text-light"><TbMessageDots/></h2>
            <h1>Contact</h1>
            <div className="contact-container">
                <div className="personal-container">
                    <div>
                        <h4>Email</h4>
                        <p>adam.vincze01@gmail.com</p>
                    </div>
                    <div>
                        <h4>Messenger</h4>
                        <p>vinczeadam</p>
                    </div>
                    <div>
                        <h4>Mobile</h4>
                        <p>+36304476315</p>
                    </div>
                </div>
                <div>
                    <form ref={form} className="form-container" onClick={sendEmail}>
                        <input className="outlined" type="text" name="user_name" placeholder="Your Name"/>
                        <input className="outlined" type="email" name="email" placeholder="Your Email"/>
                        <textarea className="outlined" name="message" placeholder="Your Message" rows="5"/>
                        <input className="btn btn-primary" type="submit" value="Send Message"/>
                    </form>
                </div>
            </div>
            
        </section>
    ) 
}

export default Contact