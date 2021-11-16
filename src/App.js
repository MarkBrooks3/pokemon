import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import { initializeGroup } from './reducers/group';
//TODO add page for single move and all moves
//TODO fix scrolling issue

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group);

  useEffect(() => {
    if (group.length === 0) {
      dispatch(initializeGroup());
    }
  }, [dispatch, group]);

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
