import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiCss3,
} from "react-icons/di";
import{IoInfinite} from "react-icons/io5";
import {
  SiFirebase,
  SiSolidity,
  SiPostgresql,
  SiFlutter,
  SiFlask,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiPhp,
  SiHtml5,
  
} from "react-icons/si";

function Techstack() {
  const stloj ={fontSize:14}
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /><p style={stloj}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><p style={stloj}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /><p style={stloj}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><p style={stloj}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><p style={stloj}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><p style={stloj}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp /><p style={stloj}>PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><p style={stloj}>Node js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><p style={stloj}>React js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask /><p style={stloj}>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango /><p style={stloj}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /><p style={stloj}>Numpy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas /><p style={stloj}>Pandas</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity /><p style={stloj}>Solidity</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /><p style={stloj}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><p style={stloj}>Postgresql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><p style={stloj}>Mongodb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter /><p style={stloj}>Flutter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /><p style={stloj}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoInfinite /><p style={stloj}>DevOps</p>
      </Col>
    </Row>
  );
}

export default Techstack;
