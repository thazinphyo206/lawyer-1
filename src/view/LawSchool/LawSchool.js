import React from 'react'
import './LawSchool.css'
import {Container,Row,Col} from 'react-bootstrap'
import {BiRevision} from 'react-icons/bi'
import {SiMicrostrategy} from 'react-icons/si'
import {TiArrowMaximise} from 'react-icons/ti'
import {FaBookOpen} from 'react-icons/fa'

export default class LawSchool extends React.Component{
    render(){
        return(
            <div>
                <div className="law-school-sec1">
                    <div className="law-school-sec1-text">
                        <h1>Law School</h1>
                        <p><a href="/">Home</a><span> | </span><a href="/law-school">Law School</a></p>
                    </div>
                </div>
                <div className="law-school-sec2">
                    <h2 className="law-school-sec2-h2">Phoe Phyu School of Law</h2>
                    <Container>
                        <Row>
                            <Col xs={12} md={4}>
                                <div className="law-school-sec2-row1-column">
                                    <span><BiRevision size={50}/></span><br/><br></br>
                                    <h4>Vision</h4><br/>
                                    <p>“To emerge free and highly- qualified scholars in Law”</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="law-school-sec2-row1-column">
                                    <span><TiArrowMaximise size={50}/></span><br/><br></br>
                                    <h4>Mission</h4><br/>
                                    <p>“To emerge lawyers and scholars in law who are able to contribute to the good of the people and To make effort to contribute to appear the society which is fair and has the rule of law”</p>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="law-school-sec2-row1-column">
                                    <span><SiMicrostrategy size={50}/></span><br/><br></br>
                                    <h4>Strategy</h4><br/>
                                    <p>Attempting to make counter-balance by scholars in law and lawyers who are brilliant and keen in the sectors of legislation, judiciary and administration.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="law-school-sec2-row2-column">
                                    <span><FaBookOpen size={50}/></span><br/><br></br>
                                    <h4>About Our Law School</h4><br/>
                                    <p>As one of the tasks of our Law School, we provide lecturing the land law for the native, peasants and farmers whose lands were seized after going to the rural area where they live. In addition, we are making the processes of compiling the course of study for Lawyers’ Legal Practice, Land Administration, International Trade and Economy. In one hand, we are making attempt to get permission as a partner to do joint- teaching legally with the internationally acknowledged universities. On the other hand, we are also making attempts to lecture – both through online and on campus – for the master of law degree and the PhD of law degree directly conferred by the above – mentioned universities.
                                    Followings are the Master of law degrees we are going to teach in our law school</p>
                                    <ul type="none" className="law-school-sec2-row2-ul">
                                        <li>- Executive LL.M in International Trade Law and Human Rights Legal Practice</li>
                                        <li>- Executive LL.M in International Commercial Law and Human Rights Legal Practice</li>
                                        <li>- Executive LL.M in International Business Law and Human Rights Legal Practice</li>
                                        <li>- Executive LL.M in Real Estate Law and Human Rights Legal Practice</li>
                                        <li>- Executive LL.M in strategic Litigation Management and court Practice</li>
                                        <li>- Executive LL.M in Constitutional and Administrative Law</li>
                                    </ul>   
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="law-school-sec3">
                    <Container>
                        <Row>
                            <Col>
                                <Container>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">The Blank of Education</h2>
                                            <p>Teaching Law in Myanmar today is like giving much priority to pass the exam annually after attending the class regularly than learning by thinking and reasoning things regarding the Law. As for the scholars and experts in our Universities, they are not under certain condition to teach the course of study broadly, deeply and thoroughly as well as to give guidance to their students how to make self-study. Besides that the opportunity to learn the master course of law is only for those who gained good grade in the exam by parroting. That is why the possibility of studying higher education in the country like ours is an extraordinary hardship. In our country, till now, there has been no Private Law School yet, as well as no appearance of Law Institution yet which may confer any degree and title relating to the law.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Democratic Mechanism</h2>
                                            <p>Now, it is the time when we are building our country with democratic way, one of the political means, and also the role of supreme legistative body (Hluttaw) and court of law are becoming higher appropriately, As there has been role of law commensurately, the leading roles of lawyers who are serving in the management sector of ministries and court of law are more needed among people.​In such condition, it is quite impossible to breed legal professionals if we are practicing the system in which only those who learn by heart usually pass the exam. All over the world, there is no such system in which only the stereotype –learners obtain change to learn Master of Law.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Changes in Economy Business</h2>
                                            <p>In economic sectors, the deep water harbor in Dhawei has been constructing while those in Thilawa and Kyaut Phyu are also in running condition. In the future, Transit Trade will progress and increase. In harmony with it, it is sure that the lawyers well – versed in Trade and Economy will be more needed. At the moment, in local universities, the number of students who have been studying law are increasing higher and higher in each university. After having their graduation continual studying the master level of law still remains as a grade gap of requirement. Consequently, establishing a such law school which has received international acknowledgement has become an urgent need for our country. The scholars emerging from this school may become entrepreneur in economy, and due to their performance, It is definitely sure that there will be a grate deal of financial benefit for our country.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">The Level of the School</h2>
                                            <p>The Law School to be open in our country is necessary to be an internationally acknowledged. The method of teaching is needed to be the one which upgrades and gives support the thinking and reasoning, and also the level of degrees and titles to be acknowledged by related countries in accordance with their laws. The Degree and Titles are needed to be internationally acknowledged standards.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Method of Teaching</h2>
                                            <p>Our Phoe Phyu School of Law has started to make an introduction of internationally standardized Law graduate class for Master Course. We have prepared the teaching of Law enough to be in connection with the necessary points for the lawyers who are serving the trade and economy in Myanma economy. During the period of study, international trade and economy standard will be taught according to the need of course and assignment. The school will take precedence over the procedures which may be implemented including similarity, dissimilarity and differences in practsing which submitting assignment and dissertation paper. The condition of being able to practice in order to match with the standard of human rights has been added.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Level of Degrees and Titles</h2>
                                            <p>After finishing the graduate classes for master and diploma in Phoe Phyu School of Law, LL.M degree will be conferred. These degree are jointly acknowledged by St.Clemnets University, Turks, SCPU School of Business (St.Clements Private University), Switzerland, US School (The WILBER FORCE LAW CENTRE, USA)</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Making Decision</h2>
                                            <p>Let’s make a big investment in Education from this time on. How for you have arrived is directly proportionate to how much you make an investment in Education.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Master Degree Programs of Phoe Phyu School of Law (IQY Technology College)</h2>
                                            <p>Phoe Phyu School of Law will provide educational program of Law for diploma and master degree by joining together with Law Department of IQY Technology College which is registered in Australia Government. The IQY Technology College provides the programs of Engineering, Management, Information Technology and Vocational Skill, and also joints together with Phoe Phyu School of Law to provide Master of Law Programs. The Founder of the law school is Phoe Phyu who is a famous activist-lawyer in movements of human rights and rights for peasants and farmers. Our School takes suggestions and guidances concerning with teaching international Law from the William Wilberforce International human rights Law Centre, USA and SCPU School of Business, St. Clement University, Switzerland. In Phoe Phyu School of Law, well – experienced lawyers and scholars in law in Myanmar will teach the students in online and face to face. IQY Technology College will give support us in making assessment, amending syllabus and teaching on-line. Phoe Phyu School of Law will coach the following master degree and master diploma of law both online and in Campus.</p>
                                            <ul>
                                                <li>Executive LL M in International Trade Law and Human Rights Legal Practice</li>
                                                <li>Executive LL.M in International Commercial Law and Human Rights Legal Practice</li>
                                                <li>Executive LL.M in International Business Law and Human Rights Legal Practice</li>
                                                <li>Executive LL.M in Real Estate Law and Human Rights Legal Practice</li>
                                                <li>Executive LL.M in Strategic Litigation Management and Court Practice</li>
                                                <li>Executive LL.M in Constitutional and Administrative Law</li>
                                            </ul>
                                            <p>After having achieved the diploma and master degree of law jointly conferred by Phoe Phyu School of Law and IQY Technology College, the William Wilberforce International human rights Law Centre, USA and SCPU school of Business, St. Clement University Switzerland will confer again the Master of Law degree for the related specialization. The syllabus lectured in Phoe Phyu School of Law is intended to specialize for free legal professionals, Human Rights Practitioners and Business man of lawyers (Lawyer- entrepreneurs) who will lead the Law Firm Business and besides the entrepreneurs who want to be proficient in international Economic Law. The duration of the course is twelve months; fees is $5000, installment, no other cost. A big hance to study International Master of Law Degree to pay mere USD $333 monthly. As there is scholarship program for LLB and PGDL Gradates those who attain the scholarship will have the chance to study with the rate of 20% off (USD 4,000), have to study 6 Subjects for LL.B Graduate and 9 Subjects for Non-LL.B Graduate.</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Executive LL.M in International Trade Law and Human Rights Legal Practice</h2>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h5>Core Modules</h5>
                                                    <ul>
                                                        <li>Law of the World Trade Organization and Human Rights Instruments</li>
                                                        <li>International Competition and Consumer Rights Law</li>
                                                        <li>International Commercial Dispute Resolution and Litigation</li>
                                                        <li>International Sale of Goods</li>
                                                        <li>International Carriage of Goods</li>
                                                        <li>Legal Research Skill and Methods, and Dissertation</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h5>Optional Modules</h5>
                                                    <ul>
                                                        <li>Technology and Cyber Law</li>
                                                        <li>Intellectual Property Law</li>
                                                        <li>International Economic Law</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Executive LL.M in International Commercial Lawand Human Rights Legal Practice</h2>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h5>Core Modules</h5>
                                                    <ul>
                                                        <li>Foundation of International Commercial Law and Human Rights Instruments</li>
                                                        <li>International Competition and Consumer Rights Law</li>
                                                        <li>International Commercial Dispute Resolution and Litigation</li>
                                                        <li>Principles of International Commercial Contracts</li>
                                                        <li>International Commercial Payments</li>
                                                        <li>Legal Research Skill and Methods, and Dissertation</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h5>Optional Modules</h5>
                                                    <ul>
                                                        <li>Technology and Cyber Law</li>
                                                        <li>Intellectual Property Law</li>
                                                        <li>International Economic Law</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Executive LL.M in International Business Law and Human Rights Legal Practice</h2>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h5>Core Modules</h5>
                                                    <ul>
                                                        <li>Foundation of International Commercial Law and Human Rights Instruments</li>
                                                        <li>International Competition and Consumer Rights Law</li>
                                                        <li>International Commercial Dispute Resolution and Litigation</li>
                                                        <li>Principles of International Commercial Contracts and Payments</li>
                                                        <li>Comparative Company Laws and Corporate Governance</li>
                                                        <li>Legal Research Skill and Methods, and Dissertation</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h5>Optional Modules</h5>
                                                    <ul>
                                                        <li>Technology and Cyber Law</li>
                                                        <li>Intellectual Property Law</li>
                                                        <li>International Economic Law</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Executive LL.M in Real Estate Law and Human Rights Legal Practice</h2>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h5>Core Modules</h5>
                                                    <ul>
                                                        <li>Principles of Real Estate Law and Human Rights Instruments</li>
                                                        <li>Civil Laws and Civil Procedure Law</li>
                                                        <li>Lower & Upper Burma Land and Revenue Law</li>
                                                        <li>Town & Village Land Law and Farm Land & Virgin Land Law</li>
                                                        <li>Principles of Law of Acquisitions</li>
                                                        <li>Legal Research Skill and Methods, and Dissertation</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h5>Optional Modules</h5>
                                                    <ul>
                                                        <li>Technology and Cyber Law</li>
                                                        <li>Business Law</li>
                                                        <li>International Economic Law</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">Executive LL.M in Strategic litigation Management and Court Practice</h2>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h5>Core Modules</h5>
                                                    <ul>
                                                        <li>Principles of Legal Professional Responsibilities and Human Rights Instruments</li>
                                                        <li>Civil Laws and Civil Procedure Law</li>
                                                        <li>Criminal Laws and Criminal Procedure Law</li>
                                                        <li>Principles of Law of Torts</li>
                                                        <li>Principles of Law of Evidence</li>
                                                        <li>Legal Research Skill and Methods, and Dissertation</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h5>Optional Modules</h5>
                                                    <ul>
                                                        <li>Technology and Cyber Law</li>
                                                        <li>Business Law</li>
                                                        <li>International Economic Law</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="law-school-sec3-h2">LL.M in Constitutional and Administrative Law</h2>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <h5>Core Modules</h5>
                                                    <ul>
                                                        <li>Principles of Constitutional Law and Human Rights Instruments</li>
                                                        <li>Legislation Process of Constitution</li>
                                                        <li>Theories of Constitutional Law</li>
                                                        <li>Principles of Administrative Law and Human Rights Instruments</li>
                                                        <li>Theories of Administrative Law</li>
                                                        <li>Legal Research Skill and Methods, and Dissertation</li>
                                                    </ul>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <h5>Optional Modules</h5>
                                                    <ul>
                                                        <li>Technology and Cyber Law</li>
                                                        <li>Business Law</li>
                                                        <li>International Economic Law</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}