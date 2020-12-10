import React from "react";
import { Link } from "react-router-dom";

export default function MainProjectListItem({ company }) {
  return (
    <tr >
      <td>
        <Link 
          to={{
            pathname: `/Project/${company.id}`,
          }}
        >
          {company.Token.name}
        </Link>
      </td>
      <td className="bil-form">{company.Token.projecttype}</td>
      <td className="bil-form">{company.name}</td>
      <td className="bil-form">{company.establishmentdate}</td>
    </tr>
  );
}
