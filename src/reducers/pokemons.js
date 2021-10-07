import pokemonServices from '../services/pokemon';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [...state, action.data];
    default:
      return state;
  }
};

//id or name works here
export const addPokemon = (id) => {
  return async (dispatch) => {
    const pokemon = await pokemonServices.getOne(id);
    dispatch({
      type: 'ADD_POKEMON',
      data: pokemon,
    });
  };
};

export default reducer;
