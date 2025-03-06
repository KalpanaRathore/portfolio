import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictaccgame from "../../Assets/Projects/tic-tac.png";
import weather from "../../Assets/Projects/weather.png";
import Mentor from "../../Assets/Projects/mentor.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Mini Weather-App"
              description="The Mini Weather App is a lightweight and user-friendly web application built with React.js. It provides real-time weather updates, allowing users to check the current temperature and weather conditions for any city worldwide."
              ghLink="https://github.com/KalpanaRathore/mausam.git"
              demoLink="https://021weather.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictaccgame}
              isBlog={false}
              title="Tic-Tac-Game"
              description="Tic-Tac-Toe is a classic two-player strategy game where players take turns marking spaces on a 3x3 grid. One player uses X, and the other uses O. The goal is to form a straight line (horizontal, vertical, or diagonal) with three of the same marks before the opponent does."
              ghLink="https://github.com/KalpanaRathore/Tictac"
              demoLink="https://tictaccgame.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mentor}
              isBlog={false}
              title="Mentor"
              description="Mentor is an Educational website where users can choose their preferred Course and Download their courses Material after completing the login or registration process. In addition to mentorship, the platform also provides study materials to enhance users' study skills. Mentors will offer proper guidance to help users improve their study techniques."
              ghLink="https://github.com/KalpanaRathore/mentor.git"
              demoLink="https://apna-gurukul.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
