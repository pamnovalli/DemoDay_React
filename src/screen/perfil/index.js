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


export default class Perfil extends Component {

    userProfilePanel = () => (
        <div className="UserProfilePanel">
            <img  id="fotoperfil" width="150px" heigth="150px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <h1 id="nome">Nome do Usuário</h1>
            <Tags tags = {["culinaria","tecnologia","lingua estrangeira","artesanato"]}/>
        </div>
    )

    render() {
        return (
            <div>
                <Menu />
                <div className="UserProfileContainer">
                    {this.userProfilePanel()}
                </div>
                <Footer />
            </div>
        );
    }
}