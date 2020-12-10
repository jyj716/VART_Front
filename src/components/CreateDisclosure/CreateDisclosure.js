import React from 'react'
import { Button,  Form, Container } from 'react-bootstrap';

import '../../css/components.css'

function CreateDisclosure({
    // tokenlogo, 
    reportTitle, type, applicableDate, details, token, onChange, onCreate,
}) {
    return (
        <div >
           <Container style={{maxWidth:"700px"}}>
                <Form.Group >
                    <Form.Label style={{fontSize:"20px"}} >리포트 제목</Form.Label>
                            <Form.Control
                            name="reportTitle"
                            placeholder="토큰이름"
                            onChange={onChange}
                            value={reportTitle}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '리포트 제목'
                            }}
                        />
                 </Form.Group>

                <Form.Group >
                    <Form.Label style={{fontSize:"20px"}} >타입</Form.Label>
                
                        <Form.Control
                            name="type"
                            placeholder="프로젝트종류"
                            onChange={onChange}
                            value={type}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '프로젝트종류'
                            }}
                        />
                  </Form.Group>
          
                <Form.Group >
                    <Form.Label style={{fontSize:"20px"}}>실행일</Form.Label>
                
                        <Form.Control
                            name="applicableDate"
                            placeholder="실행일"
                            onChange={onChange}
                            value={applicableDate}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '실행일'
                            }}
                        />
                
                </Form.Group>
                <Form.Group >
                    <Form.Label style={{fontSize:"20px"}}>디테일 사항</Form.Label>
                
                        <Form.Control
                            name="details"
                            placeholder="디테일 사항"
                            onChange={onChange}
                            value={details}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '디테일 사항'
                            }}
                        />
                
                </Form.Group>
                <Form.Group >
                    <Form.Label style={{fontSize:"20px"}}>토큰명</Form.Label>
                
                        <Form.Control
                            name="token"
                            placeholder="토큰명"
                            onChange={onChange}
                            value={token}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '토큰명'
                            }}
                        />
                
                </Form.Group>
      
            <div>
                <Button className="ccu-form-button" onClick={onCreate} >공시 등록</Button>
            </div>
            </Container>
        </div>
    )
}

export default CreateDisclosure;
