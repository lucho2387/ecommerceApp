import { FIREBASE_REALTIME_DATABASE_URL } from '../../constants/firebase';
import { cartTypes } from '../types';

const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_FROM_CART } = cartTypes;

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const remoreFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const confirmOrder = (items, total, order) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DATABASE_URL}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      });

      const result = await response.json();

      dispatch({
        type: CONFIRM_ORDER,
        result,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_ORDER,
        error,
      });
    }
  };
    // type: CONFIRM_ORDER,
    // order
};