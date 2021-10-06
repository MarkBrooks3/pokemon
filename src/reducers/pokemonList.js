import pokemonService from '../services/pokemon';
//TODO: add single pokemon look but add to a list

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_POKEMON':
      return action.data;
    default:
      return state;
  }
};

export const initializePokemon = () => {
  return async (dispatch) => {
    const pokemon = await pokemonService.getAll();
    dispatch({
      type: 'INIT_POKEMON',
      data: pokemon,
    });
  };
};

export default reducer;
