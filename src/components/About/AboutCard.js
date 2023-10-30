import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Washif </span>
            from <span className="purple"> India.</span>
            <br /> I am a final year student pursuing a Bachelor of Engineering (BE)
            in Computer Science and Engineering at A.V.C. College of engineering(affiliated to Anna University).
            <br />
            <br />
            <br />
            Area of Interest
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack development
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile development
            </li>
            <li className="about-activity">
              <ImPointRight /> Software development
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX 
            </li>
          </ul>

          
      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
