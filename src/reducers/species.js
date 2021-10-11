import pokemonServices from '../services/pokemon';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return action.data;
    default:
      return state;
  }
};

export const setSpecies = (url) => {
  return async (dispatch) => {
    const species = await pokemonServices.getUrl(url);
    dispatch({
      type: 'SET_POKEMON',
      data: species,
    });
  };
};

export default reducer;
