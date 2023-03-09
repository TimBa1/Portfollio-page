import React from "react";
import styled from "styled-components";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import tombo from "../Assets/tombo.jpg"

export const Container = styled.div`
  
`;
const About1 = styled.div`
  .container {
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
  }
  .me {
    width:100%;
    aspect-ratio:1/1;
    border-radius:2rem;
    background:linear-gradient(45deg,transparent,var(--color-primary),transparent);
    display:grid;
    place-items:center;
  }
  img{
    height:380px;
    width:380px
  }
  .img {
    border-radius:2rem;
    overflow:hidden;
    transform:rotate(15deg);
    transition:var(--transition)

  }
  .img:hover{
    transform:rotate(0deg)
  }
  .content {

  }
  .cards {
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:1.5rem;
  }
  .card {
    background:var(--color-bg-variant);
    border:1px solid transparent;
    border-radius:1rem;
    padding:2rem;
    text-align:center;
  }
  .card:hover{
    background:transparent;
    border-color:var(--color-primary-variant);
    cursor:default;
  }
  .icon {
    color:var(--color-primary);
    font-size:1.4rem;
    margin-bottom:1rem;
  }
  .card h5{
    font-size:0.95rem;
  }
  .card small{
    font-size:0.7rem;
    color:var(--color-light);
  }
  .content p{
    margin:2rem 0 2.6rem;
    color:var(--color-light)
  }
  @media screen and (max-width:1024px){
    .container{
      grid-template-columns: 1fr;
      gap:0
    }
    .me{
      width:58%;
      margin:2rem auto 4rem ;
    }
    .content{
      margin:1rem 0 1.5rem;
    }
  }
  @media screen and (max-width:600px){
    margin-bottom:5rem;
    .me{
      width:80%;
      margin:0 auto 3rem;
    }
    .cards{
      grid-template-columns:1fr 1fr;
      gap:1rem;
    }
    .content{
      text-align:center;
      
    }
    .content p{
      margin:1.5rem 0;
     
    }
    img{
    height:280px;
    width:280px
  }
  }
`;

function About() {
  return (
    <Container id="about">
      <About1>
        <section>
        <h5  data-aos="fade-up">Get To Know</h5>
        <h2  data-aos="fade-up">About Me</h2>
        <div className="container">
          <div className="me">
            <div className="img">
              <img  data-aos="zoom-in" src={tombo} alt="no img" />
            </div>
          </div>

          <div className="content">
            <div data-aos="zoom-in" className="cards">
              <article className="card">
                <FaAward className="icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              
              <article className="card">
                <VscFolderLibrary className="icon" />
                <h5>Projects</h5>
                <small>6+ Completed projects</small>
              </article>
            </div>
            <p  data-aos="flip-up">
            Innovative and avid frontend engineer that loves bringing ideas to life, quick to grasp and implement new technology to design efficient and scalable products.
            Dedicated in optimizing codes, proxies and all other services to improve frontend supports.
            junior frontend engineer seeking to acquire more knowledge on tech stacks and work on real life projects.
            Skilled at team collaboration while working in the office or remotely. Asides from coding i love playing video games,having fun in general and visiting new places and meeting new people
            </p>
            <a data-aos="fade-up" href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
        </section>
      </About1>
    </Container>
  );
}

export default About;
