import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Container, Form, FormGroup, Input } from 'reactstrap';
 
 const Vitrine = (props) => {
   return (
    <div>
      <Menu />
      <Container className="Tela">
          <FormGroup className="Input">
            <Input type="search" name="search" id="main_search" placeholder="Ex: Greenpeace" />
            <Button id="buscar" type="submit" color="primary">Buscar</Button>
          </FormGroup>
        <h2 id="titulo" >ONGS</h2>
        <Container className="Cards">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Nome Ong</CardTitle>
                <CardSubtitle>Interesses</CardSubtitle>
                <CardText>Pequena Descrição</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Nome Ong</CardTitle>
                <CardSubtitle>Interesses</CardSubtitle>
                <CardText>Pequena Descrição</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Nome Ong</CardTitle>
                <CardSubtitle>Interesses</CardSubtitle>
                <CardText>Pequena Descrição</CardText>
            </CardBody>
          </Card>
        </Container>
        <h2 id="titulo">Grupos</h2>
        <Container className="Cards">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Nome Ong</CardTitle>
                <CardSubtitle>Interesses</CardSubtitle>
                <CardText>Pequena Descrição</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Nome Ong</CardTitle>
                <CardSubtitle>Interesses</CardSubtitle>
                <CardText>Pequena Descrição</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>Nome Ong</CardTitle>
                <CardSubtitle>Interesses</CardSubtitle>
                <CardText>Pequena Descrição</CardText>
            </CardBody>
          </Card>
        </Container>
      </Container>
     <Footer />
    </div>
   );
 };
 
  
  export default Vitrine;
  