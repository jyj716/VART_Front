import React, { useState, useCallback } from "react";
import { Container } from "react-bootstrap";

import CreateDisclosure from "../components/CreateDisclosure/CreateDisclosure";

import "../css/pages.css";

const DisclosureCreate = ({ history }) => {
    const [disclosure, setDisclosure] = useState({
        // tokenLogo: '',
        reportTitle: "",
        type: "",
        applicableDate: "",
        details: "",
        token: "",
    });

    const onChangeInput = (e) => {
        const { value, name } = e.target;

        setDisclosure({
            ...disclosure,
            [name]: value,
        });
    };

    //useCallback 함수를 지우고 쓰는 기능(※[비권장]해당하는 방법은 메모리를 지우고 다시 쓰는 방식으로 진행되서 메모리 효율이 좋은 편이 아님)
    const onCreate = useCallback((e) => {
        const token = localStorage.getItem('user') 
        e.preventDefault();

        fetch("http://localhost:3001/disclosure/invoke", {
            mode:"cors",    
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${token}`
            }, 
            body: JSON.stringify(disclosure),
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("업로드 성공");
                    history.push("./Project");
                } else {
                    return res.json()
                }
            })
            
            .catch((err) => {
                console.log(err);
                alert("업로드 에러");
            });
    });

    return (
        <div >
            <header className="app-header">               공시등록
            </header>
            <Container>
                <CreateDisclosure
                    // tokenlogo={disclosure.tokenLogo}
                    reportTitle={disclosure.reportTitle}
                    type={disclosure.type}
                    applicableDate={disclosure.applicableDate}
                    details={disclosure.details}
                    token={disclosure.token}
                    onChange={onChangeInput}
                    onCreate={onCreate}
                />
            </Container>
        </div>
    );
};

export default DisclosureCreate;
