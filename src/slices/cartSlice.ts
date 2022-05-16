/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

type CartItemType = {
  id: number,
  count: number
}

interface CartState {
    cartItems: CartItemType[]
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addMultiple: (state, action: PayloadAction<CartItemType>) => {
      if (action.payload.count > 0) {
        if (!state.cartItems.some((item) => item.id === action.payload.id)) {
          state.cartItems.push({ ...action.payload });
        } else {
          state.cartItems.forEach((item) => {
            if (item.id === action.payload.id) {
              item.count += action.payload.count;
            }
          });
        }
      }
    },

    add: (state, action: PayloadAction<number>) => {
      if (!state.cartItems.some((item) => item.id === action.payload)) {
        state.cartItems.push({ id: action.payload, count: 0 });
      }
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.count += 1;
        }
      });
    },

    remove: (state, action: PayloadAction<number>) => {
      state.cartItems.forEach((item) => {
        if (item.id === action.payload) {
          item.count -= 1;
          if (item.count < 1) {
            state.cartItems.splice(state.cartItems.indexOf(item), 1);
          }
        }
      });
    },

    clear: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  add, remove, addMultiple, clear,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
