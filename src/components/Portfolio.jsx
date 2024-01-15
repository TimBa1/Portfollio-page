import React from "react";
import { Container } from "./About";
import styled from "styled-components";

import schola from "../Assets/schola.png";
import track from "../Assets/track.png";
import budget from "../Assets/budget.png";
import hollarams from "../Assets/hollarams.png";
import paymoni from "../Assets/paymoni.png";
import portfolio from "../Assets/portfolio.png";
import food from "../Assets/food.png";
import berry from '../Assets/BerryStamp React landing page.png'
import lanchak from '../Assets/Lanchak landing page.png'
import Requstory from '../Assets/Requstory landing page.png'
import lordfaith from '../Assets/lordfaith store.png'

const Port = styled.div`
  .cont {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  .port-item {
    background: var(--color-bg-variant);
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
    h3 {
      margin: .5rem 0 .5rem;
    }
    h5{
      margin-top:-5px;
      margin-bottom:10px ;
    }
  }
  .port-item:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }
  .item-img {

    border-radius: 1rem;
    overflow: hidden;
    img{
      height:150px;
    }
  }
  .item-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 5rem;
    .cont {
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }
  }
  @media screen and (max-width: 600px) {
    .cont {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;
function Portfolio() {
  const items = [
    { img:lordfaith, live:'https://folder-delta.vercel.app/',github:"https://github.com/TimBa1", describe:'Lordfaith Store' ,content:"Online E-commerce store for a luxury jewerly brand" },
    { img:berry, live:'http://berrystamp.com',github:"https://github.com/TimBa1", describe:' BerryStamp website' ,content:"Online Market place and printing solution" },
    { img:lanchak, live:'http://lanchak.com',github:"https://github.com/TimBa1", describe:' Lanchak website' ,content:"A landing page for a phramaceutical company" },
    { img:Requstory, live:'https://github.com/TimBa1',github:"https://github.com/TimBa1", describe:' Requstory website' ,content:"" },
    { img: schola, live:"http://scholapay.com", github:"https://github.com/timba1" , describe:"Scholapay Dashbaord App" ,content:"Web Application for Schools" },
    { img: track, live:"http://timba-task-tracker.netlify.com", github:"https://github.com/TimBa1/task-tracker" , describe:"Task Tracker" ,content:"For tracking your daily activities"  },
    { img: budget, live:"http://timba-budget-app.netlify.com", github:"https://github.com/TimBa1/budget-tracker" , describe:"Budget App" ,content:"Budget Application to manage finances"},
    { img: paymoni, live:"http://paymoni.app", github:"https://github.com/timba1", describe:"Paymoni Website", content:""},
    { img: hollarams, live:"http://hollarams.com", github:"https://github.com/TimBa1/Hollarams-1" , describe:"Hollarams website" ,content:""  },
    { img: portfolio, live:"http://timilehin-bakare.netlify.com", github:"https://github.com/TimBa1/Portfollio-page1" , describe:"Porfolio page" ,content:""  },
    { img: food, live:"https://github.com/TimBa1", github:"https://github.com/TimBa1/food-app.next.js" , describe:"Food App" ,content:""  },
    
    
  ];
  return (
    <Container id="portfolio">
      <Port>
        <section>
          <h5 data-aos="fade-down">My Recent Works</h5>
          <h2 data-aos="fade-down">Portfolio</h2>
          <div className="container cont">
            {items.map((item) => {
              return (
                <article  data-aos="fade-up" data-aos-duration="2000" className="port-item" key={item.id}>
                  <div className="item-img">
                    <img src={item.img} alt="no img" />
                  </div>
                  <h3>{item.describe}</h3>
                  <h5>{item.content}</h5>
                  <div className="item-cta">
                    <a href={item.github} className="btn">
                      Github
                    </a>

                    <a
                      href={item.live}
                      target="_blank"
                      className="btn btn-primary"
                      rel="noreferrer"
                    >
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
