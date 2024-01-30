import React from 'react';
import styled from 'styled-components';
import { AiOutlineCode} from 'react-icons/ai';

const AboutWrapper = styled.section`
  padding: 50px;
  background-color: #8D8989;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
 
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  color: #61dafb;
  margin-bottom: 20px;
`;

const AboutSection = () => {
  return (
    <AboutWrapper id="about">
      <AboutContent>
        <IconWrapper>
          <AiOutlineCode size="48" />
        </IconWrapper>
        <h2>About Me</h2>
        <p>
        Hi, I'm Kalpana Rathore, a passionate web developer based in New delhi.
          I specialize in creating modern and responsive websites that deliver
          a seamless user experience. My journey in the world of web development
          has been filled with exciting challenges and continuous learning. With
          a keen eye for design and a love for coding, I strive to bring ideas
          to life and create innovative solutions. Let's build something
          amazing together!
        </p>
      </AboutContent>
    </AboutWrapper>
  );
};

export default AboutSection;