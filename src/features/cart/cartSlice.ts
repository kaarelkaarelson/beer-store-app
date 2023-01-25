import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  selectId: (beer) => beer.id,
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  sortComparer: (a, b) => parseFloat(a.alcohol) - parseFloat(b.alcohol),
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
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
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
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        const itemQty = cartItem.quantity;

        if (itemQty > 1) {
          // @ts-expect-error TS(2571): Object is of type 'unknown'.
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
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
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
// @ts-expect-error TS(2571): Object is of type 'unknown'.
} = cartAdapter.getSelectors((state) => state.cart);

export const selectTotalCartQuantity = (state: any) => state.cart.totalCount;

export const selectItemCartQuantity = (state: any, itemUid: any) => {
  const items = state.cart.entities;

  // console.log(itemUid, items, state.cart.entities);
  for (let key in items) {
    if (items[key].uid === itemUid) {
      return items[key].quantity;
    }
  }
};

export const selectCartGroups = (state: any) => {
  const items = state.cart.entities;
  // @ts-expect-error TS(2550): Property 'values' does not exist on type 'ObjectCo... Remove this comment to see the full error message
  const itemsArr = Object.values(items);

  const sortedArr = itemsArr.sort(
    (a: any, b: any) => parseFloat(a.alcohol) - parseFloat(b.alcohol)
  );

  console.log('itemsArr', sortedArr);

  if (sortedArr) {
    const groups = sortedArr.reduce((accumulator: any, item: any) => {
      let style = item.style;

      accumulator[style] = accumulator[style] || {
        group: style,
        items: [],
      };

      accumulator[style].items.push(item);

      return accumulator;
    }, {});

    console.log(items, groups);

    return groups;
  }
};

export const { addItemCart, removeItemCart, removeAllItemCart, emtpyCart } =
  useCartSlice.actions;

export default useCartSlice.reducer;
