import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineUser,  AiOutlineMail} from 'react-icons/ai';


const NavbarWrapper = styled.nav`
  background-color: #333;
  padding: 15px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;


const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h1>My Portfolio</h1>
      <NavLinks>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </NavLinks>
      <IconWrapper>
        <AiOutlineHome size="24" />
        <AiOutlineUser size="24" />
        <AiOutlineMail size="24" />
      </IconWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;