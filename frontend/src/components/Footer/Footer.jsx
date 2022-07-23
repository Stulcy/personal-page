import React from 'react';
import "./Footer.scss";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/Stulcy' target="_blank" rel="noreferrer"><FaGithub size='2rem' className='icon'/></a>
      <a href='https://discordapp.com/users/discordapp.com/users/207794615028285440' target="_blank" rel="noreferrer"><FaDiscord size='2rem' className='icon'/></a>
      <a href='https://www.instagram.com/rok.stular/' target="_blank" rel="noreferrer"><FaInstagram size='2rem' className='icon'/></a>
      <a href='https://www.linkedin.com/in/rok-%C5%A1tular/' target="_blank" rel="noreferrer"><FaLinkedin size='2rem' className='icon'/></a>
    </div>
  )
}

export default Footer