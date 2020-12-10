import React from "react";
import { Image, Button, Container, Form } from "react-bootstrap";

import "../css/pages.css";

const CompanyJoin = ({ history }) => {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
        companyNum: ""
    });

    function handleInputChange(e) {
        e.preventDefault()

        const { value, name } = e.target

        console.log(value, name)

        setUser({
            ...user,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(user))
        fetch("http://localhost:3001/user/company", {
            mode: 'cors',
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json;charset=utf-8",

            },
            body: JSON.stringify(user)
        })
            .then((resp) => {
                console.log(resp.status)
                if (resp.status === 200) {
                    alert("회원가입 성공");
                    console.log("C")
                    history.push('./MainPage')
                } else {
                    alert("회원가입 실패");
                }

            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="App">
            <header className="app-header">
                <Image
                    className="cc-carousel-item-image"
                    src={require("../images/VART_.png")}
                    width="300px"
                    alt="First slide"
                    fluid
                    href="/"
                />
            </header>
            <div className="app-body">
                <Container>
                    <Form onSubmit={onSubmit} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>이름</Form.Label>
                            <Form.Control
                                className="LoginBox"
                                type="name"
                                placeholder="이름"
                                onChange={handleInputChange}
                                value={user.name}
                                name="name"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control
                                className="LoginBox"
                                type="email"
                                placeholder="이메일"
                                onChange={handleInputChange}
                                value={user.email}
                                name="email"
                                required
                            />
                          
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control
                                className="LoginBox"
                                type="password"
                                placeholder="비밀번호"
                                onChange={handleInputChange}
                                value={user.password}
                                name="password"
                                required
                            />
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>기업번호</Form.Label>
                            <Form.Control
                                className="LoginBox"
                                type="companynum"
                                placeholder="기업번호"
                                onChange={handleInputChange}
                                value={user.companyNum}
                                name="companyNum"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit"> 가입하기 </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};
export default CompanyJoin;