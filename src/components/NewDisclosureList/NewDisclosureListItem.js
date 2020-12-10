import React from "react";
import { Link } from "react-router-dom";

export default function NewDisclosureListItem({ disclosure, idx }) {
    return (
        <tr className="table-font">
            <td className="bil-form">{++idx}</td>
            <td>
                <Link className="bil-form"
                    to={{
                        pathname: `/disclosure/${disclosure.no}`,
                    }}
                >
                    {disclosure.reportTitle}
                </Link>
            </td>
            <td className="bil-form">{disclosure.token}</td>
            <td className="bil-form">{disclosure.date}</td>
        </tr>
    );
}
