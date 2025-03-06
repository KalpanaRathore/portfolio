import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,

} from "react-icons/di";
import {
  SiFirebase,
} from "react-icons/si";
import Blog from "../../Assets/blog_writing.jpg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" title="Javascript">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="Blog Writing">
       <img src={Blog} alt="" height={70} width={70}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="MongoDb">
        <DiMongodb />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
