import React from "react";
import { Container } from "./About";
import styled from "styled-components";
import { WorkExp } from "../Socials";


const Expertise = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 75%;
  margin: 0 auto;

  .experience {
    display: flex;
    width: 100%;
    overflow-x: auto;
    padding: 15px 10px;
    gap: 2rem;
    h5 {
      color: var(--color-light);
    }
  }
  .exp {
    min-width: 33%;
    height:300px;
    padding: 2rem 1rem;
    background-color: var(--color-bg-variant);
    border-radius: 20px;
    box-shadow: 0 5px 10px -2px var(--color-primary);
  }
  .post {
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .line {
    display: flex;
    height: 2px;
    width:99%;
    margin: 10px auto;
    background-image: linear-gradient(
      var(--color-primary) 33%,
      rgba(255, 255, 255, 0) 0%
    );
    border-radius: 5px;

    div {
      flex: 1;
      padding-top: 0.8rem;
      z-index: 2;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
  }
  @media screen and (max-width: 600px) {
    .exp {
      min-width: 100%;
      padding: 2rem 1rem;
      background-color: var(--color-bg-variant);
      border-radius: 20px;
    }
  }
`;
function Experience() {
  return (
    <Container id="experience">
      <Expertise>
        {" "}
        <section>
          <h2>Work Experience</h2>
          <div className="experience">
            {WorkExp.map((props) => {
              return (
                
                  <div key={props.id} className="exp">
                    <div className="top">
                      <h3>{props.place}</h3>
                      <h5>{props.tenure}</h5>
                    </div>
                    <div>
                      <h5>{props.role}</h5>
                      <div className="line"></div>
                      <h5>{props.detail}</h5>
                    </div>
                  </div>
              );
            })}{" "}
          </div>
        </section>
      </Expertise>
    </Container>
  );
}

export default Experience;
