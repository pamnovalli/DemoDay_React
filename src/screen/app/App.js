import React, { Component } from 'react';
import './App.css';
import MainSection from '../../components/mainSection';
import ContentSection from '../../components/contentSection';
import CardPerson from '../../components/cardPerson';
import Menu from '../../components/menu';
import Footer from '../../components/footer';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      people: [{
        name: "Ana Maria",
        work: "Desenvolvedora Frontend",
        bio: "Atualizar depois"
      },
      {
        name: "Laiane",
        work: "Desenvolvedora Fronted",
        bio: "Atualizar depois."
      },
      {
        name: "Pamela",
        work: "Desenvolvedora Frontend",
        bio: "Atualizar depois."
      }],
    }
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <MainSection />
        <ContentSection id={'project'} title="O Projeto" content="Texto da descrição do projeto aqui!"/>
        <ContentSection id={'about'} title="Quem Somos" content="Texto do do quem somos aqui!">
          <div className="Team-Section">
            {this.state.people.map(person => (<CardPerson name={person.name} work={person.work} bio={person.bio}  />))}
          </div>
        </ContentSection>
        <ContentSection id={'cadastrarong'} title="Cadastre sua ONG" content="Texto do Cadastre sua ONG aqui!"/>
        <Footer />
      </div>
    );
  }
}

export default App;
