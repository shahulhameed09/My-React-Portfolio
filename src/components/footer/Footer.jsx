import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer__logo' >Shahul Hameed</a>

        <ul className="links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="#"><BsInstagram /></a>
          <a href="#"><BsLinkedin /></a>
          <a href="#"><FaFacebook /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; SHAHUL HAMEED. All rights reserved.</small>
        </div>

      </footer>
    </div>
  )
}

export default Footer
