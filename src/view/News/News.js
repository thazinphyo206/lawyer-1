import React from 'react'
import './News.css'
import {Container,Row} from 'react-bootstrap'
import NewsCards from '../../components/NewsCards/NewsCards.js'

export default class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {news:[]}
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <div className="news-sec1">
                    <div className="news-sec1-text">
                        <h1>News</h1>
                        <p><a href="/">Home</a><span> | </span><a href="/news">News</a></p>
                    </div>
                </div>
                <div className="news-sec2">
                    <Container>
                        <Row>                          
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>
                            <NewsCards/>                            
                        </Row>
                    </Container>
                </div>
            </div>   
        )
    }
}

