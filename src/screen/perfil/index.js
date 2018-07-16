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

   
    communityPanel = () => (
        <div className="CommunityPanel">
            <div className="Community">
                <h2>Minhas ONGs</h2>
                <Link to={"/ong"}>Teto</Link>
                <Link to={"/ong"}>Teto</Link>
                <Link to={"/ong"}>Teto</Link>
            </div>
            <div className="Community">
                <h2>Meus Grupos</h2>
                <Link to={"/ong"}>Teto</Link>
                <Link to={"/ong"}>Teto</Link>
                <Link to={"/ong"}>Teto</Link>
            </div>
        </div>
    )

    userProfilePanel = () => (
        <div className="UserProfilePanel">
            <img  id="fotoperfil" width="60px" heigth="50px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <Tags tags = {["culinaria","tecnologia","lingua estrangeira","artesanato"]}/>
        </div>
    )


    render() {
        return (
            <div>
                <Menu />
                <div className="UserProfileContainer">
                    {this.communityPanel()}
                    {this.userProfilePanel()}
                </div>>
                <Footer />
            </div>
        );
    }
}

