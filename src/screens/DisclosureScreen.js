import React, { useState, useCallback } from 'react'
import { Container } from 'react-bootstrap'

//공시 정보 리스트 출력 경로
import BasicInfoList from '../components/BasicInfoList/BasicInfoList'


function ProjectItemScreen() {
    const [users, setUsers] = useState([])
    users.sort(function (a, b) {
        return a.Token.name < b.Token.name ? -1 : a.Token.name > b.Token.name ? 1 : 0;
    })

    const fetchUserList = useCallback(() => {
        return fetch('http://localhost:3001/publicinfo/list', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status == 200) {
                return res.json();
            } else {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
            // alert("업로드 에러")
        });
    }, [])

    React.useEffect(async () => {
        const result = await fetchUserList();
        if (result) {
            setUsers(result);
        }
    }, [])

    return (
        <div className="app-body">
            <Container>
                <BasicInfoList
                    users={users}
                />
            </Container>
        </div>


    )
}

export default ProjectItemScreen;