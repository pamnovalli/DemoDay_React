import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Tags from '../../components/tags';
import { 
    Button, 
    ButtonGroup, 
    Container, 
    Nav, 
    NavLink,
    Card, 
    CardImg, 
    CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'


export default class Perfil extends Component {

    userProfilePanel = () => (
        <div className="UserProfilePanel">
            <img 
                style={{ width: "318px", height: "180px", objectFit: "cover", position: "center" }}
                src="https://avatars2.githubusercontent.com/u/26384933?s=400&v=4"
                alt="Card image cap"
            />
            <Tags tags = {["culinaria","tecnologia","lingua estrangeira","artesanato"]}/>
        </div>
    )

    communitiesPanel = (title) => (
        <div className="CommunityPanelContainer">
            <h2>{title}</h2>
            <Link to={"/ong"}>Greenpeace</Link>
            <Link to={"/ong"}>WTF</Link>
            <Link to={"/ong"}>Teto</Link>
            <Link to={"/ong"}>Bem Amigos</Link>
            <Link to={"/vitrine"}>Ver mais...</Link>
        </div>
    )

    render() {
        return (
            <div>
                <Menu />
                <div className="UserProfileContentContainer">
                    {this.communitiesPanel("Minhas ONGs")}
                    {this.communitiesPanel("Meus Grupos e Comunidades")}
                    {this.userProfilePanel()}
                </div>
                <Footer />
            </div>
        );
    }
}

