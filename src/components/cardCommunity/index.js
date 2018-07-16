import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardCommunity = (props) => (
    <div className="CardContainer">
        <Card>
            <CardImg style={{width: "318px", height: "180px", objectFit: "cover"}} src={props.imageURL} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
                <CardText>{props.description.split("\n").map((item, i) => {
                return (<p key={i}>{item }</p>)
            })}</CardText>
            </CardBody>
        </Card>
    </div>
)

export default CardCommunity