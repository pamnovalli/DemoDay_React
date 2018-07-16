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
        bio: "Atualizar depois.",
        imageURL: "https://avatars2.githubusercontent.com/u/26384933?s=400&v=4"
      }],
    }
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <MainSection />
        <ContentSection id={'project'} title="O Projeto" content="A Voluntarize é uma plataforma que disponibiliza um catálogo de Ongs e Comunidades com descrição de atividades e links para suas redes sociais e demais contatos.
        \n Você também poderá criar e disponibilizar sua comunidade em nosso portfólio para que pessoas que tenham as mesmas causas que você possam te encontrar.
        \n Com o voluntariado você poderá cumprir hora complementar na faculdade, ensinar os seus conhecimentos, ajudar uma causa, conseguir experiência para o currículo e  ainda conhecer pessoas legais."/>
        <ContentSection id={'about'} title="Quem Somos" content="Nossa Missão é divulgar as causas sociais e conectar pessoas. \n
         Acreditamos que o Voluntariado pode ser o catalisador da união, e que pessoas unidas podem realizar grandes feitos.
        ">
          <div className="Team-Section">
            {this.state.people.map(person => (<CardPerson name={person.name} work={person.work} bio={person.bio} imageURL={person.imageURL}  />))}
          </div>
        </ContentSection>
        <ContentSection  id={'cadastrarong'} title="Cadastre sua ONG" content="Deixe seus dados que entraremos em contato!"/>
        <Footer />
      </div>
    );
  }
}

export default App;
