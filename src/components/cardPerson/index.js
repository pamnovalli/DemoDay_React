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
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.work}</CardSubtitle>
                <CardText>{props.bio}</CardText>
            </CardBody>
        </Card>
    </div>
)

export default CardPerson