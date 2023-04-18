import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com" target='_blank'> <BsLinkedin /> </a>
        <a href="https://github.com" target='_blank'><BsGithub /> </a>
        <a href="https://telegram.com" target='_blank'><FaTelegram /> </a>

    </div>
  )
}

export default HeaderSocial
