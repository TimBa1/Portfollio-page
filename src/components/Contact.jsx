import React from "react";
import { Container } from "./About";
import styled from "styled-components";
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { socialMedia } from "../Socials";
import { BsLinkedin } from "react-icons/bs";

const Cont = styled.div`
  .container {
    width:58%;
    display:grid;
    grid-template-columns:30% 58%;
    gap:12%;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap:1.2rem;
  }
  .option {
    background-color: var(--color-bg-variant);
    padding:1.2rem;
    border-radius:1.2rem;
    text-align: center;
    border:1px solid transparent;
    transition: var(--transition);
    a{
      margin-top:0.7rem;
      display: inline-block;
      font-size:0.8rem;
    }
  }
  .option:hover {
    background-color: transparent;
    border-color: var(--color-primary-variant);
  }
  .icon{
    font-size:1.5rem;
    margin-bottom:0.5rem;
  }

form{
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
input,textarea{
  width: 100%;
  padding: 1.2rem;
  border-radius:0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);

}
@media screen and (max-width:1024px){
  margin-top:5rem;
.container{

  grid-template-columns: 1fr;
  gap: 2rem;
}
  }
  @media screen and (max-width:600px){
.container{
  width: var(--container-width-sm)
}
  }

`;
function Contact() {
  return (
    <Container id="contact">
      <Cont>
        <section>
          <h5 data-aos="flip-left">Get in Touch</h5>
          <h2 data-aos="flip-right">Contact me</h2>
          <div className="container">
            <div className="options">
              <article data-aos="flip-up" className="option">
                <MdOutlineEmail  className="icon"/>
                <h4>Email</h4>
                <h5>{socialMedia.gmail}</h5>
                <a href='mailto:timilehinbakare.tb.com' target="_blank" rel="noreferrer">Send a Mail</a>
              </article>
              <article data-aos="flip-down" className="option">
                <BsLinkedin className="icon"/>
                <h4>linkedIn</h4>
                <h5>Timilehin Bakare</h5>
                <a href={socialMedia.linkedIn} target="_blank" rel="noreferrer">Lets connect</a>
              </article>
              <article data-aos="flip-up" className="option">
                <BsWhatsapp className="icon"/>
                <h4>Whatsapp</h4>
                <h5>{socialMedia.number}</h5>
                <a href={socialMedia.whatsapp} target="_blank" rel="noreferrer" >Contact Me</a>
              </article>
            </div>
            <form  action="https://formsubmit.co/7c1e5a26dbee156903748d7561343219" method="POST">
              <input data-aos="zoom-out-left" type="text" name="name" placeholder="Your Full Name" required/>
              <input data-aos="zoom-out-right" type="email" name="email" placeholder="Enter your Email" required />
              <textarea data-aos="zoom-out-down" name="message" placeholder="Your Message" required rows="7" ></textarea>
              <button data-aos="zoom-out" type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </Cont>
    </Container>
  );
}

export default Contact;
