import React from 'react'
import { Container } from './About'
import styled from 'styled-components'
import { socialMedia } from '../Socials'
import { SiGmail } from 'react-icons/si'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

const Foot =styled.div`
margin-top:7rem;
background: var(--color-bg-variant);
padding: 3rem 0;
text-align: center;
font-size:1rem;
a{
  color:var(--color-primary);
}
.logo{
  font-family:fantasy;
  font-size:2rem;
  font-weight:500;
  margin-bottom:2rem;
  display:inline-block;
}
.links{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:2rem;
  margin:0 auto 2rem;
  font-size:1rem
}
.socials{
display:flex;
justify-content:center;
gap:2rem;
margin:0 auto 2rem;
a{
  background:var(--color-bg);
  color: var(--color-white);
  padding: 0.8rem;
  border-radius:00.7rem;
  display: flex;
  border: 1px solid transparent;
}
a:hover{
  background: transparent;
  color:var(--color-primary);
  border-color:var(--color-bg);
}

}.copyright{
  margin-bottom:4rem;
}
@media screen and (max-width:1024px){
 
  }
  @media screen and (max-width:600px){
 
  }


`
function Footer() {
  return (
    <Container id='footer'>
      <Foot  data-aos="fade-up" data-aos-duration="7000">
        <a href="home" className='logo'>TimBa</a>
        <ul className='links'>
          <li className=''><a href='home'>Home</a></li>
          <li className=''><a href='about'>About</a></li>
          <li className=''><a href='experience'>Experience</a></li>
          <li className=''><a href='portfolio'>Portfolio</a></li>
          <li className=''><a href='contact'>Contact</a></li>
        </ul>
        <div className="socials">
          <a
            href={socialMedia.linkedIn}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <BsLinkedin />
          </a>
          <a
            href={socialMedia.Github}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <BsGithub />
          </a>
          <a
            href={socialMedia.gmail}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <SiGmail />
          </a>
          <a
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <FiTwitter />
          </a>
        </div>
        <div className='copyright'>
          <small>&copy; Timba All rights reserved.</small>
        </div>
      </Foot>
    </Container>
  )
}

export default Footer