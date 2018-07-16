import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import Tags from '../../components/tags';
import { Link } from 'react-router-dom'


export default class Perfil extends Component {

    userProfilePanel = () => (
        <div className="UserProfilePanel">
            <img 
                style={{ width: "100px", height: "120px", objectFit: "cover", position: "right" }}
                src="https://avatars2.githubusercontent.com/u/26384933?s=400&v=4"
                alt="Card image cap"
            />
            <Tags tags = {["culinaria","tecnologia","lingua estrangeira","artesanato"]}/>
            <br />
            <Link to={"/criarGrupo"}>Criar Grupo</Link>
        </div>
    )

    communitiesPanelOng = (title) => (
        <div className="CommunityPanelContainer">
            <h2>{title}</h2>
            <Link to={"/ong"}>Teto</Link>
            <Link to={"/ong"}>Abrace</Link>
            <Link to={"/ong"}>Amigos do Bem</Link>
            <Link to={"/ong"}>Apae</Link>
            <Link to={"/vitrine"}>Ver mais...</Link>
        </div>
    )

    communitiesPanelGroup = (title) => (
        <div className="CommunityPanelContainer">
            <h2>{title}</h2>
            <Link to={"/grupo"}>Capacita</Link>
            <Link to={"/grupo"}>Protege</Link>
            <Link to={"/grupo"}>Idioma Para Todos</Link>
            <Link to={"/grupo"}>Bem Amigos</Link>
            <Link to={"/vitrine"}>Ver mais...</Link>
        </div>
    )

    render() {
        return (
            <div>
                <Menu />
                <div className="UserProfileContentContainer">
                    {this.communitiesPanelOng("Minhas ONGs")}
                    {this.communitiesPanelGroup("Meus Grupos")}
                    {this.userProfilePanel()}
                </div>
                <Footer />
            </div>
        );
    }
}

