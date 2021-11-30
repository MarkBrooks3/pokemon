import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
//TODO add page for single move and all moves
//TODO fix scrolling issue

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    background-image: url('/PokemonBackground.jpg')
  }
`;

const Page = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Page>
        <Switch>
          <Route path='/pokemon/:id'>
            <Pokemon />
          </Route>
          <Route path='/'>
            <PokemonList />
          </Route>
        </Switch>
      </Page>
    </Router>
  );
};

export default App;
