import { useContext } from "react";
import { Button, Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import auth from "../../class/Auth/Auth";
import cookie from "../../class/Cookie/Cookie";
import { SiteContext } from "../../context";
import Logout from "../Logout/LogoutButton";





interface NavBarProps {
}

const NavBar = ({ }: NavBarProps) => {
    const check:boolean = auth.Auth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">IT Project Comparison</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {check?
                        <>
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/UserHistory">User History</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                        <Nav.Item className="ml-auto">
                        <Logout></Logout>
                        </Nav.Item>
                        </>
                    
                        : 
                        <>
                         <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                          <Nav.Link as={NavLink} to="/register">Registeren</Nav.Link>
                          <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        </>
                        
                        }
                
                <div className="ml-5">
                    <input type="button" onClick={()=>{
                            cookie.SetCookie("base","https://localhost:44391",2)
                            cookie.SetCookie("checkBase","flase",2);
                            cookie.DeleteCookie("auth")
                            cookie.DeleteCookie("token")
                            window.location.reload();

                        }}  value="Local" className={cookie.GetCookies("checkBase")=="flase"?"btn btn-success":"btn btn-info" } />

                        <input type="button" onClick={()=>{
                        
                                cookie.SetCookie("base","https://project202220220524193351.azurewebsites.net",2)
                                cookie.SetCookie("checkBase","true",2);
                                cookie.DeleteCookie("auth")
                                cookie.DeleteCookie("token")
                                window.location.reload();
                        }}  value="DB" className={cookie.GetCookies("checkBase")=="flase"?"btn btn-info":"btn btn-success" } />


                </div>

                  
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;