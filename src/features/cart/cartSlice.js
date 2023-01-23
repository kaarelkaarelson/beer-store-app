import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
  selectId: (beer) => beer.id,
});

const initialState = cartAdapter.getInitialState({
  totalCount: 0,
});

const useCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const itemId = action.payload.id;
      let cartItem = state.entities[itemId];

      if (cartItem) {
        state.entities[itemId].quantity += 1;
      } else {
        let newItem = { ...action.payload, quantity: 1 };
        cartAdapter.addOne(state, newItem);
      }

      state.totalCount++;
    },
    removeItemCart: (state, action) => {
      const itemId = action.payload.id;
      let cartItem = state.entities[itemId];

      if (cartItem) {
        const itemQty = cartItem.quantity;

        if (itemQty > 1) {
          cartItem.quantity--;
        } else {
          cartAdapter.removeOne(state, itemId);
        }

        state.totalCount--;
      }
    },
    emtpyCart: (state, action) => {
      cartAdapter.removeAll(state);
      state.totalCount = 0;
    },
  },
});

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds,
} = cartAdapter.getSelectors((state) => state.cart);

export const selectTotalCartQuantity = (state) => state.cart.totalCount;
export const selectItemCartQuantity = (state, itemId) => {
  const items = state.cart.entities;

  for (let i = 0; i < items.length; i++) {
    if (items[i] === itemId) {
      return items[i].quantity;
    }
  }
};

export const { addItemCart, removeItemCart, emtpyCart } = useCartSlice.actions;

export default useCartSlice.reducer;
