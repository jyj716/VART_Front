import React from "react";
import { Image, Button, Card, Container } from "react-bootstrap";

import "../css/pages.css";

const Service = () => {
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
      <div>서비스</div>

      <div className="app-body">
        <Container>
          <tr>
            <td>
              <Card>죄측</Card>
            </td>
            <td>
              <Card>최근 공시</Card>
            </td>
            <td>
              <Card>우측</Card>
            </td>
          </tr>
          <tr>
            <td>
              <Card className="service-card-form">
                <Card.Img variant="top" src="../images/kakao.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card className="service-card-form">
                <Card.Img variant="top" src="../images/kakao.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
            <td>
              <Card className="service-card-form">
                <Card.Img variant="top" src="../images/kakao.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </td>
          </tr>
        </Container>
      </div>
    </div>
  );
};

export default Service;
