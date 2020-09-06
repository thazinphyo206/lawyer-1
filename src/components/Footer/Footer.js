import React from 'react'
import './Footer.css'
import {Container,Row,Col} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Container className="contai">
                    <Row>
                        <Col xs={6} md={3}>
                            <div className="footer-column">
                                <h5>Significance of the Law firm</h5><br/>
                                <p>We provide any kinds of legal Services with wide vision and reasoning all around</p>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="footer-column">
                                <h5>Practice Areas</h5><br/>
                                <span>> Economy</span><br/>
                                <span>> Land-disputes</span><br/>
                                <span>> Trade</span>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                           <div className="footer-column">
                                <h5>Business Hours</h5><br/>
                                <span className="s-color">Opening Days: </span><br/>
                                <span>  Monday – Friday : 9am to 20 pm Saturday : 9am to 17 pm</span><br/>
                                <span className="s-color">Vacations: </span><br/>
                                <span>  All Sunday Days All Official Holidays</span>
                           </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="footer-column">
                                <h5>Have a Questions?</h5><br/>
                                <span className="s-color"><Icon.Map /> : </span><br/>
                                <span>No 506 (5th Floor), 50th Street Condominium(B), 50th Street, 5th Ward, Botahtaung Township, Yangon</span><br/>
                                <span className="s-color" ><Icon.Telephone/> : </span><br/>
                                <span>09 73000 441</span><br/>
                                <span className="s-color"><Icon.Envelope /> : </span><br/>
                                <span>ipleaderphoephyu@gmail.com</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}