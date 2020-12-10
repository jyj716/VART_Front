import React from 'react'
import { Navbar as BSNavbar, Image, Nav, NavDropdown } from 'react-bootstrap';

import '../../css/pages.css';

function Navbar() {
    const [token, setToken] = React.useState(null);
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        permission: ""
    })

    const watchToken = () => {
        setToken(localStorage.getItem('user'))
    }

    React.useEffect(() => {
        window.addEventListener('storage', watchToken);
        watchToken();
        return () => window.removeEventListener('storage', watchToken)
    }, [token])

    React.useEffect(() => {
        const token = localStorage.getItem('user')

        if (token !== null) {
            fetch('http://localhost:3001/user/info', {
                mode: "cors",
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    if (resp.status === 200) {
                        return resp.json()
                    } else {
                        if (resp.status === 401) {
                            localStorage.removeItem('user')
                        }
                    }

                })
                .then((data) => {
                    setUser(data.user)
                })
        }

    }, [token])

    return (
        
            <BSNavbar collapseOnSelect expand="lg" variant="blue" className="bg">
                <BSNavbar.Brand href="/">
                    <Image
                        className="navbar-logo"
                        src={require("../../images/VART_.png")}
                        width="80px"
                        alt="First slide"
                        fluid
                        href="/" />
                </BSNavbar.Brand>

                <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BSNavbar.Collapse id="responsive-navbar-nav" className="App-partials">
                    <Nav.Link href="../About">소개</Nav.Link>
                    {token !== null && user.permission === 'company' ? (
                        <NavDropdown title="가상자산" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="../Project">가상자산</NavDropdown.Item>
                            <NavDropdown.Item href="../Newdisclosure">공시</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../projectItemCreate">프로필 등록</NavDropdown.Item>
                            <NavDropdown.Item href="../DisclosureCreate">공시 등록</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                            <NavDropdown title="가상자산" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="../Project">가상자산</NavDropdown.Item>
                                <NavDropdown.Item href="../Newdisclosure">공시</NavDropdown.Item>
                            </NavDropdown>
                        )}

                    <NavDropdown title="고객센터" id="collasible-nav-dropdown2">
                        <NavDropdown.Item href="../Announcement">공지사항</NavDropdown.Item>
                        <NavDropdown.Item href="../Faq">고객센터</NavDropdown.Item>
                    </NavDropdown>
                    <Nav className="mr-auto">
                    </Nav>


                    {token === null ? (
                        <Nav>
                            <Nav.Link href="../CompanyLogin">로그인</Nav.Link>
                            <Nav.Link href="../Join">회원가입</Nav.Link>
                        </Nav>) : (
                            <Nav>
                                <Nav.Link onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.removeItem('user')
                                    window.location.href = '/'
                                }}>로그아웃</Nav.Link>
                            </Nav>)}
                </BSNavbar.Collapse>
            </BSNavbar>
    )
}

export default Navbar;