import React from 'react'
import {Tabs,Tab} from 'react-bootstrap'
import { RiAuctionLine } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa';
import { BiMedal } from 'react-icons/bi';
import './ContactTab.css'
import ContactForm from '../ContactForm/ContactForm.js'

export default class ContactTab extends React.Component{
    render(){
        return(
            <div>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Law Firm Enquiry">
                        <div className="pic1-form1">
                            <div className="pic1">
                                <div className="text1">
                                    <RiAuctionLine className="text1-icon1" size={100}/>
                                    <h1 className="text1-head1">Law Firm</h1>
                                    <h3>Enquiry</h3>           
                                </div>
                            </div>
                            <div className="form1">
                                <h2 className="head1">Enquiry Form</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Law School Enquiry">
                        <div className="pic2-form2">
                            <div className="pic2">
                                <div className="text2">
                                    <FaRegHandshake className="text2-icon2" size={100}/>
                                    <h1 className="text2-head2">Law School</h1>
                                    <h3>Enquiry</h3>
                                </div>
                            </div>
                            <div className="form2">
                                <h2 className="head2">Enquiry Form</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="Publications Order">
                        <div className="pic3-form3">
                            <div className="pic3">
                                <div className="text3">
                                    <BiMedal className="text3-icon3" size={100}/>
                                    <h1 className="text3-head3">Publication</h1>
                                    <h3>Order</h3>
                                </div>
                            </div>
                            <div className="form3">
                                <h2 className="head3">Enquiry Form</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}