import React, { Component } from 'react';
import './App.css';
import MainSection from '../../components/mainSection'
import ScrollableAnchor from 'react-scrollable-anchor'
import ContentSection from '../../components/contentSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={'search'}>
          <MainSection />
        </ScrollableAnchor>
        <ScrollableAnchor id={'project'}>
          <ContentSection />
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <ContentSection />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
