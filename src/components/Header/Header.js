import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import './Header.css'
import balance from '../../assets/image/balance.png'
import flag_mm from '../../assets/image/flag-mm.jpg'
import flag_uk from '../../assets/image/flag-uk.jpg'

export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
                        <Navbar.Brand href="/"><img src={balance} alt="logo"/>  Phoe Phyu & Associates</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about-us">About Us</Nav.Link>
                                <Nav.Link href="/law-firm">Law Firm</Nav.Link>
                                <Nav.Link href="/law-school">Law School</Nav.Link>
                                <Nav.Link href="/news">News</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Nav.Link href="/mm">
                                    <img src={flag_mm} alt="flag_mm"/>  MM
                                </Nav.Link>
                                <Nav.Link eventKey={2} href="/eng">
                                    <img src={flag_uk} alt="flag_uk"/>  EN
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        )
    }
}

            



            
