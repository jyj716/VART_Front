import React, { useState } from "react";
import { Table, Button, Container } from 'react-bootstrap';

import "../css/pages.css";

// react-router-dom에서 전달해주는 prop
const ProjectItem = ({ match }) => {
  const [company, setCompany] = useState({
    Developerleader: { education: "", experience: "", name: "" },
    Executive: { education: "", experience: "", name: "" },
    Token: { name: "", projecttype: "" },
    establishmentdate: "",
    id: "",
    jurisdiction: "",
    location: "",
    name: ""
  })

  React.useEffect(() => {
    if (!match.params.id) {
      alert("잘못된 접근입니다.")
    }
    fetch(`http://localhost:3001/publicinfo/query/${match.params.id}`, {
      method: 'GET',
    }).then((resp) => {
      return resp.json()
    }).then((data) => {
      setCompany(data)
    })
  }, [])

  return (
      <Container style={{maxWidth:"600px", marginTop:"150px",}} >
        <div style={{textAlign:"center" ,fontSize:"44px"}}>회사 프로필</div>
        <Table style= {{marginTop:"50px"}} striped bordered hover>
          
          <tbody>
            <tr>
              <td style={{width:"25%"}} >토큰 이름</td>
              <td > {company.Token.name}</td>
              <td style={{width:"30%"}}>프로젝트 종류</td>
              <td > {company.Token.projecttype}</td>
            </tr>
            <tr>
              <td>회사 이름</td>
              <td>{company.name}</td>
              <td>회사 설립일</td>
              <td>{company.establishmentdate}</td>
              </tr>
              <tr>
              <td>회사 위치</td>
              <td>{company.location}</td>
              <td>회사 법인 관할자</td>
              <td>{company.jurisdiction}</td>
            </tr>
            <tr>
              <td>경영진 이름</td>
              <td>{company.Executive.name}</td>
              <td >경영진 학력</td>
              <td >{company.Executive.education}</td>
            </tr>
              <td>경영진 경력</td>
              <td>{company.Executive.experience}</td>
              <td>개발자 이름</td>
              <td>{company.Developerleader.name}</td>
            <tr>
              <td >개발자 학력</td>
              <td >{company.Developerleader.education}</td>
              <td>개발자 경력</td>
              <td>{company.Developerleader.experience}</td>
            </tr>
          </tbody>
        </Table>
        <Button href={`/disclosurebytokenname/${company.Token.name}`} className="ccu-form-button" >공시</Button>
      </Container>
  );
};

export default ProjectItem;
