// src/components/ServicesSection.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';



const ProjectSection = styled.section`
  background-color: #ececec;
  padding: 50px 0;
`;

const ProjectCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

const ServicesSection = () => {

  const projectZoomIn = useSpring({
    from: { transform: 'scale(0.8)' },
    to: { transform: 'scale(1)' },
    config: { duration: 800 },
  });

  return (
    <>
      <ProjectSection>
        <h2 style={{textAlign:'center'}}>Projects</h2>
        <ProjectCard style={projectZoomIn}>
          <img src="img/port.png" alt="Portfolio" />
          <h3>Portfolio</h3>
          <p>The goal of the personal portfolio website mini project is to create an online space that effectively communicates your skills, experiences, and projects. This interactive platform serves as a digital resume, providing visitors with a comprehensive overview of your capabilities and achievements.</p>
        </ProjectCard>
        <ProjectCard style={projectZoomIn}>
          <img src="img/weatherimg.png" alt="Weather App" />
          <h3>Weather App</h3>
          <p>A weather app is a software application designed to provide users with up-to-date information about the current and forecasted weather conditions. These applications typically utilize data from meteorological services and weather stations worldwide to offer accurate and reliable weather information.</p>
        </ProjectCard>
        <ProjectCard style={projectZoomIn}>
          <img src="img\ancient-gurukul-system-of-education.png" alt="Mentor" />
          <h3>Mentor</h3>
          <p>Mentor is an Educational website where users can choose their courses Material after completing the login or registration process. </p>
        </ProjectCard>
        {/* Add more projects as needed */}
      </ProjectSection>
    </>
  );
};

export default ServicesSection;
