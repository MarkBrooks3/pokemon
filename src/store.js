import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import groupReducer from './reducers/group';
import pokemonsReducer from './reducers/pokemons';

const store = createStore(
  combineReducers({ group: groupReducer, pokemons: pokemonsReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
