import React, { Component } from 'react';
import './App.css';
import MainSection from '../../components/mainSection';
import ContentSection from '../../components/contentSection';
import Menu from '../../components/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MainSection />
        <ContentSection id={'project'} title="Teste1" content="bla bla 2"/>
        <ContentSection id={'about'} title="Teste2" content="bla bla 2" />
      </div>
    );
  }
}

export default App;
