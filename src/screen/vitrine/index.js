import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';
 
 const Vitrine = (props) => {
   return (
    <div>
      <Menu />
     <CardDeck className="deck">
       <Card className="card">
         <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
         <CardBody>
           <CardTitle>Card title</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
       <Card className="card">
         <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
         <CardBody>
           <CardTitle>Card title</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
       </CardDeck>
       <CardDeck className="deck">
       <Card className="card">
         <CardImg  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
         <CardBody>
           <CardTitle>Card title</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
       <Card className="card">
         <CardImg  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
         <CardBody>
           <CardTitle>Card title</CardTitle>
           <CardSubtitle>Card subtitle</CardSubtitle>
           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
     </CardDeck>
     <Footer />
    </div>
   );
 };
 
  
  export default Vitrine;
  