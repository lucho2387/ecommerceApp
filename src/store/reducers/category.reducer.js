import { CATEGORIES } from '../../constants/data/index';
import { categoryTypes } from '../types';

const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categoryReducer = (state = initialState, action) => {
  // controlo el tipo de accion que se ejecuta en reducer
  switch (action.type) {
    case SELECT_CATEGORY:
      // obtenemos la posicion de la categoria con el id
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      // si no existe la categoria
      if (indexCategory === -1) return state;

      return {
        ...state,
        // accedemos a la categoria seleccionada
        selected: state.categories[indexCategory],
      };
    default:
      return state;
  }  
};

export default categoryReducer;