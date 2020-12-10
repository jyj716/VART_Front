import React from 'react'
import { Image } from "react-bootstrap";

import '../../css/pages.css'

export default function Header() {
    return (
        <header className="app-header">
            <Image
            className="cc-carousel-item-image"
            src={require("../images/VART_.png")}
            width="300px"
            height="200px"
            alt="First slide"
            href="/" />
      </header>
    )
}
