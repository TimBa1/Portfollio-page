import React from "react";
import { Container } from "./About";
import styled from "styled-components";
import { WorkExp } from "../Socials";

const Expertise = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width:75%;
  margin:0 auto;

  .experience {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 1.4rem;
    position: relative;
  }
  .exp {
    display: flex;
    justify-content: center;
    width: 100%;
    justify-content: space-between;
    line-height: 40px;
    align-items: flex-start;
    div {
      flex: 1;
    }
  }
  .post {
  }
  .post h5 {
    color: var(--color-light);
  }
  .role {
    margin-left: 2rem;
  }
  .role h5 {
    color: var(--color-light);
  }
  .progressbar {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    left: 45%;
  }
  .line {
    display:flex;
    flex-direction:column;
    position: absolute;
    height: 92%;
    width: 2px;
    background-image: linear-gradient(
      var(--color-primary) 33%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: right;
    background-size: 2px 30px;
    background-repeat: repeat-y;
    left: 48%;
    z-index: 1;
    border-radius: 5px;

    div {
      flex: 1 ;
      padding-top: .8rem;
      z-index: 2;
    }
  }
  .circle {
    background: var(--color-primary);
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
  }
  @media screen and (max-width:1024px){
    width:95%;
  }
  @media screen and (max-width:600px){

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
                  <div className="post">
                    <h2>{props.place}</h2>
                    <h5>{props.tenure}</h5>
                  </div>
                  <div className="role">
                    <h2>{props.role}</h2>
                    <h5>{props.detail}</h5>
                  </div>
                </div>
              );
            })}{" "}
            <div className="progressbar">
              <div className="line">
                <div >
                  <div className="circle"></div>
                </div>
                <div style={{paddingTop:"9.7rem"}}>
                  <div className="circle"></div>
                </div>
                <div style={{marginTop:"4rem"}}>
                  <div className="circle"></div>
                </div>
                <div style={{marginTop:"4rem"}}>
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Expertise>
    </Container>
  );
}

export default Experience;
