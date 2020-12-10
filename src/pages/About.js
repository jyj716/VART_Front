import React from "react";
import { Image, Card, Container } from "react-bootstrap";

import "../css/pages.css";

const About = () => {
  return (
    <div className="App">
      <header className="app-header">
        <Image
          className="cc-carousel-item-image"
          src={require("../images/VART_.png")}
          width="300px"
          height="200px"
          alt="First slide"
          fluid
          href="/" />
      </header>
      <div >
        <Container >

          <tr>
            <td>
              <Card className="about-form">
                <Card.Body>
                  <Card.Title>정유진</Card.Title>
                  <Card.Text>
                    블록체인 전자공시시스템 VART 개발 백 엔드 담당 조장
                  </Card.Text>
                  <a href="https://github.com/jyj716">
                    <Image
                      className="github"
                      src={require("../images/githublogo.png")}
                      width="300px"
                      height="200px"
                      alt="First slide"
                      fluid>
                    </Image>
                  </a>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card className="about-form">
                <Card.Body>
                  <Card.Title>이상호</Card.Title>
                  <Card.Text>
                    블록체인 전자공시시스템 VART 개발 하이퍼 레저 담당 팀원
                  </Card.Text>
                  <a href="https://github.com/dlehdrb128">
                    <Image
                      className="github"
                      src={require("../images/githublogo.png")}
                      width="300px"
                      height="200px"
                      alt="First slide"
                      fluid>
                    </Image>
                  </a>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card className="about-form">
                <Card.Body>
                  <Card.Title>김환국</Card.Title>
                  <Card.Text>
                    블록체인 전자공시시스템 VART 개발 프론트 엔드 담당 팀원
                  </Card.Text>
                  <a href="https://github.com/danimothman">
                    <Image
                      className="github"
                      src={require("../images/githublogo.png")}
                      width="300px"
                      height="200px"
                      alt="First slide"
                      fluid>
                    </Image>
                  </a>
                </Card.Body>
              </Card>
            </td>
          </tr>
        </Container>
      </div>
    </div>
  );
};

export default About;
