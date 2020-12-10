// useRef를 활용한 Component안에 변수 만들기
import React from "react";
import { Nav, Table } from "react-bootstrap";

import '../../css/pages.css'
import '../../css/components.css'

const User = ({ user }) => {
  console.log(user);
  return (
    <tr className="table-font">
      <td>
        {" "}
        <Nav.Link className="bil-form" href="/ProjectItem">
          {user.Token.name}
        </Nav.Link>
      </td>
      <td className="bil-form">{user.name}</td>
      <td className="bil-form">{user.establishmentdate}</td>
    </tr>
  );
};
function BasicInfoList({ users }) {
  return (
    <div>
      <Table responsive="sm">
        <thead className="table-font-title">
          <tr>
            <th>토큰 이름</th>
            <th>회사 이름</th>
            <th>회사 설립일</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, name) => (
            <User user={user} key={user.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BasicInfoList;
