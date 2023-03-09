import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import styled from "styled-components";

const Nav = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 266666;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  bottom: 2rem;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  a{
    background:transparent;
    padding:0.9rem;
    border-radius:50%;
    display: flex;
    color:var(--color-light);
    font-size:1.1rem
  }
  a:hover{
    background: rgba(0,0,0,0.3);
  }
  a.active{
    background: var(--color-primary);
    color: var(--color-bg);
  }
`;

function Navbar() {
    const [active,setActive]= useState('#home')
  return (
    <Nav>
      <a href="#home" onClick={()=>setActive('#home')} className={active ==='#home' ?'active':''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=>setActive('#about')} className={active==='#about'?'active':''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={()=>setActive('#experience')} className={active === '#experience'?'active':''}>
        <BiBook />
      </a>
      <a href="#portfolio" onClick={()=>setActive('#portfolio')} className={active === '#portfolio'?'active':''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={()=>setActive('#contact')} className={active === '#contact'?'active':''}>
        <BiMessageSquareDetail />
      </a>
    </Nav>
  );
}

export default Navbar;
