import React from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

import { Button, ButtonGroup, Container, Nav, NavLink, Card, CardImg, CardBody,
    CardTitle} from 'reactstrap';

export default class Perfil extends React.Component {
    render() {
        return (
        <div>
            <Menu />
            <Container className="Corpo">
                <Container className="Sessao">
                    <Nav id="grupos">
                        <h3>Minhas Ongs</h3>
                        <NavLink href="">Lingua estrangeira</NavLink>
                        <NavLink href="">Esporte</NavLink>
                        <Button className="VerTodos">+ Ver todos</Button>
                    </Nav> 
                    <Nav id="grupos">
                        <h3>Meus Grupos</h3>
                        <NavLink href="">Lingua estrangeira</NavLink>
                        <NavLink href="">Esporte</NavLink>
                        <Button className="VerTodos">+ Ver todos</Button>
                    </Nav> 
                </Container>
                    <Card className= "Card">
                        <CardBody>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardTitle>Perfil</CardTitle>
                        </CardBody>
                    </Card>
            </Container>
            <Button id="criargrupo">Criar Grupo</Button>
                <Container className="Interesses">
                    <ButtonGroup className="Tags">
                        <Button outline color="primary">Tecnologia</Button>{' '}
                        <Button outline color="secondary">Ambientalismo</Button>{' '}
                        <Button outline color="success">Esporte</Button>{' '}
                    </ButtonGroup>
                    <ButtonGroup className="Tags">
                        <Button outline color="info">Culinaria</Button>{' '}
                        <Button outline color="warning">Proteção Animal</Button>{' '}
                        <Button outline color="danger">Lingua estrangeira</Button>
                    </ButtonGroup>
                </Container>
            <Footer />
        </div>
        );
    }
}