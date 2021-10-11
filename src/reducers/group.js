import pokemonService from '../services/pokemon';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_GROUP':
      return action.data;
    case 'SET_GROUP':
      return action.data;
    default:
      return state;
  }
};

export const initializeGroup = () => {
  return async (dispatch) => {
    const pokemons = await pokemonService.getAll();
    dispatch({
      type: 'INIT_GROUP',
      data: pokemons,
    });
  };
};

export const changeGroup = (url) => {
  return async (dispatch) => {
    const pokemons = await pokemonService.getUrl(url);
    dispatch({
      type: 'SET_GROUP',
      data: pokemons,
    });
  };
};

export default reducer;
