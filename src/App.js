import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';
import { initializeGroup } from './reducers/group';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeGroup());
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
