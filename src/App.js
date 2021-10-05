import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';

const App = () => {
  return (
    <Router>
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
