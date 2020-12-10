import React, { useState } from "react";
import { Table,  Container } from 'react-bootstrap';

import NewDisclosureListItem from "../components/NewDisclosureList/NewDisclosureListItem"

import "../css/pages.css";
import "../css/components.css";

// react-router-dom에서 전달해주는 prop
const DisclosureByTokenname = ({ match }) => {
    const [publicInfoList, setPublicInfoList] = useState([])

    React.useEffect(() => {
        if (!match.params.tokenName) {
            alert("잘못된 접근입니다.")
        }
        fetch(`http://localhost:3001/disclosure/query/token/${match.params.tokenName}`, {
            method: 'GET',
        }).then((resp) => {
            console.log(resp)
            return resp.json()
        }).then((disclosure) => {
            console.log(disclosure)
            setPublicInfoList(disclosure)
        })
    }, [])

    return (
        <div className="app-body">
            <Container>
                <div>
                    <Table>
                        <thead className="table-font-title">
                            <tr>
                                <th style={{ maxWidth: "20px" }}>번호</th>
                                <th>리포트 타이틀</th>
                                <th>토큰명</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publicInfoList.map((disclosure, idx) => (
                                <NewDisclosureListItem disclosure={disclosure} key={disclosure.no} idx={idx} />
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default DisclosureByTokenname;

