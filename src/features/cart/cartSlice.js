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
    removeAllItemCart: (state, action) => {
      const itemId = action.payload.id;
      let cartItem = state.entities[itemId];

      if (cartItem) {
        const itemQty = cartItem.quantity;
        cartAdapter.removeOne(state, itemId);

        state.totalCount -= itemQty;
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

export const selectItemCartQuantity = (state, itemUid) => {
  const items = state.cart.entities;

  // console.log(itemUid, items, state.cart.entities);
  for (let key in items) {
    if (items[key].uid === itemUid) {
      return items[key].quantity;
    }
  }
};

export const { addItemCart, removeItemCart, removeAllItemCart, emtpyCart } =
  useCartSlice.actions;

export default useCartSlice.reducer;
