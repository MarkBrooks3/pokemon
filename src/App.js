import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import { initializePokemon } from './reducers/pokemonList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializePokemon());
  });

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
