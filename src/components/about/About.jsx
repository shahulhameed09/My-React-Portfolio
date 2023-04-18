import React from 'react'
import ME from '../../assets/my_rMVfbyl.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>3+ Years Working Experience</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon' />
              <h5>Education</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
              <h5>Education</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus velit reiciendis corrupti rem vel ipsum molestiae fugit doloremque, quisquam sequi, modi maiores asperiores adipisci dolore tenetur alias animi impedit aliquam.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
