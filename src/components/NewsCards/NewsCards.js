import React from 'react'
import {Col,Card,Button} from 'react-bootstrap'
import one from '../../assets/image/1.jpg'
import { withRouter } from "react-router"
import './NewsCards.css'

class NewsCards extends React.Component{
    goToCarddetails = (newsId) => {
        localStorage.setItem("selectedCard", newsId);
        this.props.history.push('/news-details');
    }
    myFunction =(text)=> { 
        var res = text.substring(0, 80);
        return res;
    }
    render(){
        return(
            <Col className="col" xs={6} md={3}>
                <Card>
                    <Card.Img variant="top" src={one} className="img" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {this.myFunction("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit animi id fugiat neque rem, suscipit laborum voluptatum be'atae quasi re'cusandae corrupti at, sapiente unde non! Cumque animi voluptate eligendi fuga!")} ...  
                        </Card.Text>
                        <Button variant="primary" onClick = {()=>this.goToCarddetails('newsId1')}>Details...</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default withRouter(NewsCards)