import React, { useState } from "react";
import { Table,  Container } from 'react-bootstrap';

import "../css/pages.css";

// react-router-dom에서 전달해주는 prop
const DisclosureItem = ({ match }) => {
    const [disclosure, setDisclosure] = useState({
        reportTitle: "",
        type: "",
        applicableDate: "",
        details: "",
        token: ""
    })

    React.useEffect(() => {
        if (!match.params.no) {
            alert("잘못된 접근입니다.")
        }
        
        fetch(`http://localhost:3001/disclosure/query/${match.params.no}`, {
            method: 'GET',
        }).then((resp) => {
            return resp.json()
        }).then((disclosure) => {
            setDisclosure(disclosure)
        })
    }, [])

    return (
        <div>
        <Container style={{marginTop:"200px",maxWidth:"700px", textAlign:"center"}}>
            <div style={{fontSize:"30px", marginBottom:"60px"}}>최근 공시</div>
            <Table  striped bordered hover>
                <tbody >
                   
                    <tr>  
                        <th>제목</th>
                        <td >{disclosure.reportTitle}</td>
                    </tr>
                    <tr>
                        <th>유형</th>
                        <td>{disclosure.type}</td>
                    </tr>
                        <tr>
                        <td>실행일</td>                        
                        <td>{disclosure.applicableDate}</td>
                    </tr>
                    <tr>
                        <td>토큰명</td>
                        <td>{disclosure.token}</td>
                        </tr>
                        <tr>
                        <td>작성일</td>
                        <td>{disclosure.date}</td>
                    </tr>
                    
                </tbody>
            </Table>        
             <table>
            <tr >
                <th>디테일 사항</th>
            </tr>
            <tr>{disclosure.details}</tr>
            </table>
            </Container>
            </div>
        );
};

export default DisclosureItem;
