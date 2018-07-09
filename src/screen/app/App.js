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
        <ContentSection id={'project'} title="O Projeto" content="Uma breve descrição do projeto... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        <ContentSection id={'about'} title="Quem Somos" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
      </div>
    );
  }
}

export default App;
