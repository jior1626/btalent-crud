import React from "react";
import { Container, Nav, Navbar, Dropdown, Button } from "react-bootstrap";
import { useLocation, NavLink, useNavigate  } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { setLoading, setLogOut } from "../../../features/auth/authSlice";
import routes from "../../../routes";

// import "./Navbar.css";

import Logo from "./../../../assets/images/logo.png";

const NavbarMenu: React.FC<any> = ({}) => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const logout = () => {
        dispatch(setLoading(true));
        dispatch(setLogOut());
        dispatch(setLoading(false));
        navigate('/')
        
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
                    {/* <Button
                        variant="dark"
                        className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
                        onClick={() => {}}
                    >
                        <i className="fas fa-ellipsis-v"></i>
                    </Button> */}
                    <Navbar.Brand
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="mr-2"
                    >
                        <img src={Logo} alt="Logo Btalent" width={90} />
                        
                    </Navbar.Brand>
                </div>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav" navbar>
                        <Nav.Item>
                            <NavLink
                                // data-toggle="dropdown"
                                to="/home"
                                className="m-0"
                            >
                                <i className="nc-icon nc-palette"></i>
                                <span className="d-lg-none ml-1">Dashboard</span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink
                                // data-toggle="dropdown"
                                to="/users"
                                className="m-0"
                            >
                                <i className="nc-icon nc-palette"></i>
                                <span className="d-lg-none ml-1">Usuarios</span>
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                    <Nav className="nav" navbar>
                        <Nav.Item>
                            <NavLink
                                className="m-0"
                                to="/home"
                            >
                                <span className="bi bi-bar-chart-line-fill">Dashboard </span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink
                                className="m-0"
                                to="/users"
                            >
                                <span className="bi bi-people-fill mr-1">Usuarios</span>
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="nav" navbar>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                onClick={() => logout()}
                            >
                                <span className="no-icon">Cerrar sesión</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    )
}

export default NavbarMenu;