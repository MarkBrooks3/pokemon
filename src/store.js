import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import groupReducer from './reducers/group';
import pokemonsReducer from './reducers/pokemons';
import speciesReducer from './reducers/species';

const store = createStore(
  combineReducers({
    group: groupReducer,
    pokemons: pokemonsReducer,
    species: speciesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
