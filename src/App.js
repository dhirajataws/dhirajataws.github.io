import React, { Component } from 'react';
import './App.css';
import { Container, addLogoName, addImage } from './common/components';
import tile from './tile.jpg';

const values = { xs: "6", md: "6", sm: "6", lg: "6" }

const withLogo = addLogoName(values);

class App extends Component {
  render() {
    return (
      <Container>
        {withLogo(addImage(tile))}
      </Container>
    );
  }
}

export default App;
