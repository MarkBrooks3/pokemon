import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import listReducer from './reducers/pokemonList';
import detailedReducer from './reducers/detailedPokemon';

const store = createStore(
  combineReducers({ pokemonList: listReducer, detailedList: detailedReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
