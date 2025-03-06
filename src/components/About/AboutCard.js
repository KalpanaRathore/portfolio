import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kalpana Rathore,</span> a passionate <span className="purple">web Developer and Content Writer</span> with a strong foundation in computer science
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I have completed my<span className="purple">  Diploma in Computer Science </span> from Delhi and am currently pursuing my <span className="purple">B.Tech in Computer Science</span> from Lingya's University.

            I have also completed a<span className="purple"> Full Stack Development </span>course, where I learned<span className="purple"> MERN Stack</span> technology, <span className="purple">(React.js, Node.js, Express.js, and MongoDB)</span>. I specialize in building modern, scalable, and user-friendly web applications. Alongside my technical skills, I am also a <span className="purple"> freelance content writer</span>, creating engaging and SEO-friendly content for various industries.
            <br />
            I am always eager to learn new technologies and enhance my skills to develop impactful digital solutions and compelling content. My goal is to combine my technical and creative abilities to deliver high-quality work that makes a difference. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Playing Games</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Dancing</span>
            </li>
            <li className="about-activity">
              <ImPointRight /><span className="purple"> Enjoy Listening to Music</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kalpana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
