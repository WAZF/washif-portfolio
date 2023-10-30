import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiDocker,
  SiWindows,
  SiUbuntu,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiUnity,
  SiFigma,
  SiAdobephotoshop,
  SiAdobexd,
  SiBlender,
} from "react-icons/si";

function Toolstack() {
  const stloj ={fontSize:14}
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /><p style={stloj}>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu /><p style={stloj}>Ubuntu</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><p style={stloj}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /><p style={stloj}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit /><p style={stloj}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /><p style={stloj}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /><p style={stloj}>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity /><p style={stloj}>Unity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /><p style={stloj}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd /><p style={stloj}>Adobe XD</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop /><p style={stloj}>Adobe Photoshop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender /><p style={stloj}>Blender</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
