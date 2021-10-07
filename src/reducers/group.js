import pokemonService from '../services/pokemon';
//TODO: add single pokemon look but add to a list

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
    const pokemon = await pokemonService.getAll();
    dispatch({
      type: 'INIT_GROUP',
      data: pokemon,
    });
  };
};

export const changeGroup = (url) => {
  return async (dispatch) => {
    const pokemon = await pokemonService.getGroup(url);
    console.log(pokemon);
    dispatch({
      type: 'SET_GROUP',
      data: pokemon,
    });
  };
};

export default reducer;
