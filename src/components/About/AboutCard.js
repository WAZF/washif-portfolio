import React from "react";
import Card from "react-bootstrap/Card";
import { ImCircleRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Mohamed Washif </span>
            from <span className="purple"> India.</span> */}
            <br /> I’m Mohamed Washif, a passionate and versatile Software Engineer with a focus on Java backend development, mobile platforms (iOS/Android), and cloud-native solutions. I’m currently working at Digiledge in Bangalore, where I’ve contributed to major FinTech innovations like Central Bank Digital Currency (CBDC) and SoftPOS platforms. My work spans across backend systems using Java (Spring Boot), MySQL, and Go, as well as mobile SDK development in Swift and Kotlin. With a Bachelor’s degree in Computer Science and Engineering from A.V.C. College of Engineering (Anna University), I bring a solid foundation in data structures, algorithms, and system architecture.
            <br />
            <br />
            <br />
            In my role at Digiledge, I’ve:
          </p>
          <ul>
            <li className="about-activity">
              <ImCircleRight /> Designed and deployed scalable microservices with Spring Boot, secured digital payments with Go, and integrated SDKs for banking partners.
            </li>
            <li className="about-activity">
              <ImCircleRight /> Developed apps (iOS and Android) and backend services used by banks like Indian Bank, Federal Bank, and Karnataka Bank.
            </li>
            <li className="about-activity">
              <ImCircleRight /> Software development
            </li>
          </ul>

          
      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
