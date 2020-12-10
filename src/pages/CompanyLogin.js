import React from "react";
import { Image, Button, Container, Form } from "react-bootstrap";

import "../css/pages.css";

const CompanyLogin = ({ history }) => {
  const [userEmail, setUserEmail] = React.useState("");
  const [pwd, setUserPwd] = React.useState("");

  const sumbitLogin = React.useCallback((userEmail, pwd) => {
    const data = {
      email: userEmail,
      password: pwd,
    };
    console.log(JSON.stringify(data));
    fetch("http://localhost:3001/user/login", {
      mode: 'cors',
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",

      },
    })
      .then((resp) => {
        console.log(resp.headers);
        console.log(resp);
        return resp.json();

      })
      .then((data) => {
       

        if (!data.token) {
          alert(data.message)
          history.push('/CompanyLogin')
        } else {
          localStorage.setItem("user", data.token)
          window.location.href = '/'
        }
      })
      .catch((error) => {
        alert("로그인 실패");
      });
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <Image
          style={{ right: "500px" }}
          className="cc-carousel-item-image"
          src={require("../images/VART_.png")}
          width="300px"
          alt="First slide"
          fluid
          href="/"
        />
      </header>
    
        <Container className="">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="LoginBox"
                type="email"
                placeholder="아이디"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                value={userEmail}
              />
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="LoginBox"
                type="password"
                placeholder="패스워드"
                onChange={(e) => {
                  setUserPwd(e.target.value);
                }}
                value={pwd}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button
              variant="primary"
              href="#none"
              onClick={(e) => {
                e.preventDefault();
                sumbitLogin(userEmail, pwd);
              }}
            >
              로그인
            </Button>
          </Form>
        </Container>
      </div>
 
  );
};

export default CompanyLogin;
