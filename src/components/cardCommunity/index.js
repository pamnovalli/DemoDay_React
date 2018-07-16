import React from 'react'
import {
    Button,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardCommunity = (props) => (
    <div className="CardContainer">
        <Card>
            <CardImg style={{width: "318px", height: "180px", objectFit: "cover"}} src={props.imageURL} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.subtitle}</CardSubtitle>
                <CardText>{props.description.split("\n").map((item, i) => { return (<p key={i}>{item }</p>) })}</CardText>
                <Button color="success" onClick={props.onClickDetails} >Ver mais</Button>
            </CardBody>
        </Card>
    </div>
)

export default CardCommunity