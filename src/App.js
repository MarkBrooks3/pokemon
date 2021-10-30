import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import { initializeGroup } from './reducers/group';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
  }
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeGroup());
  });

  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/pokemon/:id'>
          <Pokemon />
        </Route>
        <Route path='/'>
          <PokemonList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
