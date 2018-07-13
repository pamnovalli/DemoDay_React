import React, { Component } from 'react';
import './styles.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import { Container, Button, ButtonGroup, NavLink, Card, CardImg} from 'reactstrap';


class Ong extends Component {
    render() {
        return (
          <div>
            <Menu />
            <Container className="Pagina">
              <Container id="descricao">
                <Container id="perfilong">
                  <h1>Nome da ONG</h1>
                  <Card id="imagem">
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  </Card>
                </Container>
                <h4>Drink water out of the faucet mice, twitch tail in permanent irritation. Destroy couch as revenge ears back wide eyed destroy the blinds or stuff and things man running from cops stops to pet cats, goes to jail. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff spill litter box, scratch at owner, destroy all furniture, especially couch for purr yet proudly present butt to human yet slap kitten brother with paw. When owners are asleep, cry for no apparent reason intently stare at the same spot, yet headbutt owner's knee hunt by meowing loudly at 5am next to human slave food dispenser. </h4>
              </Container>
              <h4>Redes sociais</h4>
              <Container id="sociais">
                <NavLink href="">Facebook</NavLink>
                <NavLink href="">GMAIL</NavLink>
              </Container>
              <ButtonGroup className="Tags">
                <Button outline color="info">Culinaria</Button>{' '}
                <Button outline color="warning">Proteção Animal</Button>{' '}
                <Button outline color="success">Lingua estrangeira</Button>{' '}
              </ButtonGroup>
              <ButtonGroup className="Tags">
                <Button outline color="primary">Lingua estrangeira</Button>{' '}
                <Button outline color="secondary">Esporte</Button>{' '}
                <Button outline color="success">Esporte</Button>{' '}
              </ButtonGroup>
            </Container>
            <Footer />
          </div>
        );
    }
}



export default Ong;
    