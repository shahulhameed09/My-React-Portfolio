import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h2>Email</h2>
            <h5>shahul@gmail.com</h5>
            <a href="mailto:shahul66649@gmail.com" target='_blank' >Send a message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h2>Messenger</h2>
            <h5>shahulhameed</h5>
            <a href="mailto:shahul66649@gmail.com" target='_blank' >Send a message</a>
          </article>

          <article className="contact__option">
          <FaWhatsapp className='contact__option-icon'/>
            <h2>WhatsApp</h2>
            <h5>+91-6364074061</h5>
            <a href="https://api.whatsapp.com/send?phone+916364074061" target='_blank' >Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
