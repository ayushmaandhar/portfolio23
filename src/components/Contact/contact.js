import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from './../../assets/facebook-icon.png';
import LinkedIn from './../../assets/linkedin.png'
import YouTubeIcon from './../../assets/youtube.png';
import TwitterIcon from './../../assets/twitter.png';
import InstagramIcon from './../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_7u4hnjx', 'template_lygolle', form.current, 'CWHvfqnHyOLXjVHjg')
      .then((result) => {
          console.log(result.text);
          alert(`Email Successfully Sent! Thanks for your time`);
      }, (error) => {
          console.log(error.text);
          alert('Email not sent, some error at server-end, sorry!');
      });
  };

  return (
    <section className='contactPage'>
        <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"> Please fill out the form below to discuss any work oppurtunities!</span>
        <form className= 'contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className= "name" placeholder= 'Your Name' name="from_name" required/> 
            <input type="email" className="email" placeholder= 'Your Email' name="from_email" required/> 
            <textarea className= 'msg' name="message" rows="5" placeholder= 'Your Message'required/>
            <button type= 'submit' value= 'Send' className="submitBtn">Submit</button> 
            <div className="links">
                <a href='https://www.linkedin.com/in/ayushmaan-dhar-400512214/?originalSubdomain=in' 
                    target='_blank'>
                    <img src={LinkedIn} alt='' className="link" /> 
                </a> 
                <img src={TwitterIcon} alt='' className="link" />
                <img src={YouTubeIcon} alt='' className="link" />
                <img src={InstagramIcon} alt='' className="link" />
            </div>
        </form>
        </div>  
    </section>
  )
}

export default Contact;
