import React from "react";
import { Container } from "./About";
import styled from "styled-components";
import { socialMedia } from "../Socials";
import me from "../Assets/me.png";
const Port = styled.div`
  .cont {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:2.5rem;
  }
  .port-item {
    background:var(--color-bg-variant);
    padding:1.3rem;
    border-radius:2rem;
    border:1px solid transparent;
    transition:var(--transition);
    h3{
      margin:1.2rem 0 2rem;
    }
  }
  .port-item:hover{
    border-color:var(--color-primary-variant);
    background: transparent;
  }
  .item-img{
    border-radius:1.5rem;
    overflow:hidden;
  }
  .item-cta{
    display:flex;
    gap:1rem;
    margin-bottom:1rem;
  }
  @media screen and (max-width:1024px){
    margin-top:5rem;
.cont{
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}
  }
  @media screen and (max-width:600px){
.cont{
  grid-template-columns:  1fr;
  gap:1rem
}
  }
`;
function Portfolio() {
  const items = [{}, {}, {}, {}, {}, {}];
  return (
    <Container id="portfolio">
      <Port>
        <section>
          <h5>My Recent Works</h5>
          <h2>Portfolio</h2>
          <div className="container cont">
            {items.map((item) => {
              return (
                <article className="port-item" key={item.id}>
                  <div className="item-img">
                    <img src={me} alt="no img" />
                  </div>
                  <h3>THis is a portfoilio item title</h3>
                  <div className="item-cta">
                   <a href={socialMedia.Github} className="btn">
                    Github
                  </a>
                  <a href="www.livfe.com" target="_blank" className="btn btn-primary">
                    Live Demo
                  </a>  
                  </div>
                 
                </article>
              );
            })}
          </div>
        </section>
      </Port>
    </Container>
  );
}

export default Portfolio;
