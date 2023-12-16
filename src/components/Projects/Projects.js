import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import mart from "../../Assets/Projects/Screenshot (11).png";
import game from "../../Assets/Projects/Screenshot (114).png";
import ai from "../../Assets/Projects/Screenshot (61).png";
import ecomrect from "../../Assets/Projects/Screenshot (108).png";
import ecomjs from "../../Assets/Projects/Screenshot (112).png";
import ibm from "../../Assets/Projects/Screenshot (96).png";
import habit from "../../Assets/Projects/InShot_20231216_195842927.jpg";
import confab from "../../Assets/Projects/confab Chatting app using flutter.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={habit}
              isBlog={false}
              title="
              Habit Tracker - Flutter/Hive Innovation"
              description="
             • Crafted a comprehensive habit tracking app harnessing Flutter and Hive technologies, ensuring robust functionality across Android, iOS, and web platforms.
             • Leveraged Flutter's cross-platform capabilities to deliver a unified and consistent user experience, optimizing development resources for multiple platforms.
             • Enabled easy habit tracking with intuitive checkboxes and interactive UI, streamlining user interaction and goal monitoring."
              ghLink="https://github.com/WAZF/Habit-tracker.git"
              demoLink="https://www.youtube.com/watch?v=Rc5O1e9DgLY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={confab}
              isBlog={false}
              title="
              Confab: Cross-Platform Chat App - Flutter/Firebase Mastery"
              description="
              •Engineered robust user authentication and verification systems within Confab, prioritizing user data security and privacy.
              •Integrated social sign-in through Google to enhance user convenience while maintaining stringent security measures.
              •Implemented real-time messaging and image-sharing functionalities.
              •Enabled user profile customization and intuitive chat management options, including deletion functionalities, ensuring a seamless and user-friendly experience."
              ghLink="https://github.com/WAZF/Confab-chatting-app.git"
              demoLink="https://www.youtube.com/watch?v=8RkmzNKC-JA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomrect}
              isBlog={false}
              title="Developed a responsive E-Commerce website using React"
              description="
              •Implemented dynamic product catalog and shopping cart for enhanced user experience.
              •Utilized Bootstrap for a responsive design layout. Employed React.js and JavaScript for interactive interfaces and client-side
              functionality.
              •Enhanced website performance by optimizing code for faster data retrieval"
              ghLink="https://github.com/WAZF/My-Ecom-React"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="Pixel Perfection -Image quality increaser and ai(Full stack)"
              description="
              •Developed a web application using HTML, CSS, JavaScript, and Python (Flask) to provide users with a seamless image editing
              experience.
              •Employed Docker to containerize the application, ensuring easy deployment and scalability.
              •Deployed the application on the IBM Cloud, leveraging IBM Db2 and IBM Kubernetes for efficient database management and
              seamless scalability.
              "
              ghLink="https://github.com/WAZF/pixel_perfection"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="Advanced AI virtual assistant"
              description="
              •Developed an AI voice assistant using Python for seamless user communication.
              •Created an AI voice assistant in Python, allowing for intuitive user interactions through voice commands.
              •Implemented functionalities for executing user commands, providing voice responses, and carrying out designated actions.
              "
              ghLink="https://github.com/WAZF/Advanced_python_voice_assistant"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mart}
              isBlog={false}
              title="Mayilai Mart"
              description="Developed and implemented offline showrooms to augment the online shopping experience.
              Showrooms provided a physical space for customers to interact with products before making online
              purchases.
              •Conducted market research for optimal showroom locations.
              •Designed and set up visually appealing, user-friendly showrooms.
              •Integrated interactive technology for product experiences."
              ghLink="https://github.com/WAZF/Mayilai-Mart-host"
              demoLink="https://wazf.github.io/Mayilai-Mart-host/main.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="TicTok-Game-using-react"
              description="Developed a dynamic Tic-Tac-Toe game using React, showcasing proficiency in component-based UI development.
              •Implemented game logic to determine winners based on rows, columns, and diagonals, enhancing user experience.
              •Employed React's state management for efficient handling of game state and turn-based interactions."
              ghLink="https://github.com/WAZF/TicTok-Game-using-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomjs}
              isBlog={false}
              title="E-Com_website"
              description="Designed and developed a responsive E-Commerce website utilizing HTML, CSS, and JavaScript, providing a seamless user shopping experience.
              Implemented dynamic product catalog and shopping cart functionalities to enhance interactivity and user engagement.
              Integrated secure payment gateways for safe and seamless online transactions, ensuring a secure purchasing process."
              ghLink="https://github.com/WAZF/E-com_website"
              demoLink="https://wazf.github.io/E-com_website/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
