import React from 'react'
import './NewsDetails.css'
import one from '../../assets/image/1.jpg'
import {Container,Row,Col} from 'react-bootstrap';
//import NewsDetailsCommentForm from '../NewsDetailsCommentForm/NewsDetailsCommentForm';

export default class NewsDetails extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = {news:[]}
    }
    componentDidMount(){
        
    }
    render() {
        let selectedCardId = localStorage.getItem("selectedCard");       
        return ( 
            <div>
                <div className="news-details-sec1">
                    <div className="news-details-sec1-text">
                        <h1>News Details ({selectedCardId})</h1>
                        <p><a href="/">Home</a><span> | </span><a href="/news-details">News Details</a></p>
                    </div>
                </div>
                <div className="news-details-sec2">
                    <Container>
                        <Row>
                            <Col xs={1} md={1}></Col>
                            <Col xs={10} md={10}>
                                <div>
                                    <img src={one} alt="details-img" className="details-img"/><br/><br/><br/>
                                    <h3>News Title</h3><br/>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, molestias officia est illo, reiciendis reprehenderit rerum quo porro, amet ad ipsa culpa sunt saepe aut facere nemo ratione sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, molestias officia est illo, reiciendis reprehenderit rerum quo porro, amet ad ipsa culpa sunt saepe aut facere nemo ratione sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, molestias officia est illo, reiciendis reprehenderit rerum quo porro, amet ad ipsa culpa sunt saepe aut facere nemo ratione sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, molestias officia est illo, reiciendis reprehenderit rerum quo porro, amet ad ipsa culpa sunt saepe aut facere nemo ratione sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, molestias officia est illo, reiciendis reprehenderit rerum quo porro, amet ad ipsa culpa sunt saepe aut facere nemo ratione sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, molestias officia est illo, reiciendis reprehenderit rerum quo porro, amet ad ipsa culpa sunt saepe aut facere nemo ratione sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus, molestias officia est illo, reiciendis reprehenderit rerum quo porro, amet ad ipsa culpa sunt saepe aut facere nemo ratione sequi.</p><br/>
                                    <a href="/news" className="btn btn-primary">Back</a>
                                </div>
                            </Col>
                            <Col xs={1} md={1}></Col>
                        </Row>
                    </Container>     
                    {/* <div className="form">
                        <div>
                            <h3 className="head">Drop Your Comment</h3>
                            <NewsDetailsCommentForm/>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}