import React, { useState, useEffect, useMemo } from "react";
import { Image, Container, Table } from "react-bootstrap";

import NewDisclosureListItem from "../components/NewDisclosureList/NewDisclosureListItem"
import Pagination from '../components/Pagination'

import "../css/pages.css";
import "../css/components.css";

function DisclosureScreen() {
    const [users, setUsers] = useState([]);
    const [loc, setLoc] = useState(1);

    const pageLimit = 9;
    const paginationLimite = 5;
    // list length
    const totalLength = useMemo(() => {
        return users.length;
    }, [users]);

    // page length
    const totalPageNum = useMemo(() => {
        return Math.ceil(totalLength / pageLimit);
    }, [totalLength, pageLimit]);


    useEffect(() => {
        fetch("http://localhost:3001/disclosure/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .then((result) => {
                if (result) {
                    result.sort((a, b) => {
                        return b.no - a.no;
                    })
                    setUsers(result);
                    console.log(result)
                }
            })
            .catch((err) => {
                console.log(err);
                alert("업로드 에러")
            });
    }, []);

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

            <Container>
                <div className="app-body">
                    <Table responsive="sm" style={{ textAlign: "center" }}>
                        <thead className="table-font-title">
                            <tr>
                                <th style={{ maxWidth: "40px" }} > 번호</th>
                                <th>리포트 타이틀</th>
                                <th style={{ maxWidth: "40px" }}>토큰명</th>
                                <th style={{ maxWidth: "40px" }}>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.slice((loc - 1) * pageLimit, loc * pageLimit).map((disclosure, idx) => (
                                <NewDisclosureListItem disclosure={disclosure} key={disclosure.no} idx={idx} />
                            ))}
                        </tbody>
                    </Table>
                </div>
                <Pagination totalLength={totalLength} active={loc} last={totalPageNum} paginationLimite={paginationLimite} onClick={(index) => setLoc(index)} />

            </Container>
            </div>

    );
}

export default DisclosureScreen;
