import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import Copyleaks from "../../Assets/copyleaks.jpg";
import gptZero from "../../Assets/gpt.png";
import Zerogpt from "../../Assets/Zerogpt.png";
import Duplichecker from "../../Assets/duplichecker.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Copyleaks">
        <img src={Copyleaks} alt="" height={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VsCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="gptZero">
      <img src={gptZero} alt="" height={100} width={100}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Zerogpt} alt="" height={100} width={100} title="Zerogpt"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Duplichecker">
      <img src={Duplichecker} alt="" height={100} width={100}/>
      </Col>
    </Row>
  );
}

export default Toolstack;
