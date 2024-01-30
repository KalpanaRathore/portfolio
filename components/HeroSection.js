import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowDown} from 'react-icons/ai';


const HeroWrapper = styled.section`
  background: url("img/port.png")center/cover no-repeat;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const ScrollDown = styled(AiOutlineArrowDown)`
  color: white;
  margin-top: 20px;
  animation: bounce 2s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper id="hero">
      <h2>Welcome to My Portfolio</h2>
      <p>See Below...</p>
      <a href="#about"><ScrollDown size="50" /></a>
    </HeroWrapper>
  );
};

export default HeroSection;