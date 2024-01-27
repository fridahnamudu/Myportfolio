import React, { useRef } from 'react'
import './contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lmufbmi', 'template_22h7oko',form.current,'gVWkCvcyRwAX5CVLU')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');

          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section className='contactForm1'>
        <div>
            <div className="contactPageTitle"> Contact Me</div>
            <span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>
            <form ref={form} onSubmit={sendEmail} >
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea  className='msg' name="message"  rows="5" placeholder='Your Message ...'></textarea>
                <button type='submit' value='Send' className="submitbtn" >Submit</button>
            </form>
                <div className="links">
                    <GitHubIcon style={{ fontSize: '50px' }} />
                    <TwitterIcon style={{ fontSize: '50px' }}/>
                    <LinkedInIcon style={{ fontSize: '50px' }}/>
                    <EmailIcon style={{ fontSize: '50px' }}/>
                </div>
       
        

    </div>

</section>  )
}
export default Contact