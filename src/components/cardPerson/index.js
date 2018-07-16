import React from 'react'
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPerson = (props) => (
    <div>
        <Card>
            <CardImg style={{ width: "318px", height: "180px", objectFit: "cover", position: "center"}} src={props.imageURL} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.work}</CardSubtitle>
                <CardText>{props.bio}</CardText>
            </CardBody>
        </Card>
    </div>
)

export default CardPerson