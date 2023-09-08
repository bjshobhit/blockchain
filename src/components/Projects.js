import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Why Us?</h2>
                <p>We recognize that students invest tremendous effort into their academic projects, and their innovative ideas often remain confined within the walls of their institutions. Galaxy aims to change that by creating a platform where these ideas can shine.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Centralized knowledge</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Detect Plagiarism</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Peer Learning</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="fourth">Cross-University Collaboration</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Student Showcase</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                      <p>Galaxy serves as a centralized repository of academic projects undertaken by students from universities and colleges across India. It collects, organizes, and stores project information, making it easily accessible to students, educators, and researchers.</p>
                      <h3>Benefits:</h3>
                      <ul>
                        <li>Streamlines access to a vast wealth of academic knowledge.</li>
                        <li>Simplifies project discovery and research for students.</li>
                        <li>Facilitates cross-institutional collaboration and idea exchange.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> Galaxy integrates robust plagiarism detection tools to ensure the integrity of research and promote originality among students. It scans projects for similarities with existing content to maintain academic honesty.</p>
                      <h3>Benefits:</h3>
                      <ul>
                        <li>Fosters a culture of academic integrity.</li>
                        <li>Encourages students to produce unique and innovative work.</li>
                        <li>Assists educators in identifying potential plagiarism cases.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Galaxy encourages peer learning by enabling students to explore and learn from the work of their fellow students. It allows users to access and review projects, providing valuable insights and inspiration.</p>
                      <h3>Benefits:</h3>
                      <ul>
                        <li>Promotes collaboration and knowledge sharing among students.</li>
                        <li>Enhances the learning experience by exposing students to diverse ideas.</li>
                        <li>Fosters a supportive academic community.</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
