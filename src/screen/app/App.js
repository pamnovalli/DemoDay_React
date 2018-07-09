import React, { Component } from 'react';
import './App.css';
import MainSection from '../../components/mainSection';
import ContentSection from '../../components/contentSection';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MainSection />
        <ContentSection id={'project'} title="Teste1" content="bla bla 2"/>
        <ContentSection id={'about'} title="Teste2" content="bla bla 2" />
        <Footer />
      </div>
    );
  }
}

export default App;
