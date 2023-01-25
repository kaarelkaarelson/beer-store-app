import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CartState, CartItem } from '../../types/types';

const cartAdapter = createEntityAdapter<CartItem>({
  selectId: (cartItem) => cartItem.id,
  sortComparer: (a, b) => parseFloat(a.alcohol) - parseFloat(b.alcohol),
});

const initialState = cartAdapter.getInitialState({
  totalCount: 0,
});

const useCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<CartItem>) => {
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
    addItemByIdCart: (state, action: PayloadAction<{ id: number }>) => {
      const itemId = action.payload.id;
      let cartItem = state.entities[itemId];

      if (cartItem) {
        cartItem.quantity += 1;

        state.totalCount++;
      }
    },
    removeItemByIdCart: (state, action: PayloadAction<{ id: number }>) => {
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
    removeAllItemCart: (state, action: PayloadAction<{ id: number }>) => {
      const itemId = action.payload.id;
      let cartItem = state.entities[itemId];

      if (cartItem) {
        const itemQty = cartItem.quantity;
        cartAdapter.removeOne(state, itemId);

        state.totalCount -= itemQty;
      }
    },
    emtpyCart: (state, action: PayloadAction<{}>) => {
      cartAdapter.removeAll(state);
      state.totalCount = 0;
    },
  },
});

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds,
} = cartAdapter.getSelectors((state: CartState) => state.cart);

export const selectTotalCartQuantity = (state: CartState) =>
  state.cart.totalCount;

export const selectItemCartQuantity = (state: CartState, itemUid: string) => {
  const items = state.cart.entities;

  // console.log(itemUid, items, state.cart.entities);
  for (let key in items) {
    if (items[key]!.uid === itemUid) {
      return items[key]!.quantity;
    }
  }
};

export const selectCartGroups = (state: CartState) => {
  const items = state.cart.entities;
  const itemsArr = Object.values(items);

  const sortedArr = itemsArr.sort(
    (a, b) => parseFloat(a!.alcohol) - parseFloat(b!.alcohol)
  );

  console.log('itemsArr', sortedArr);

  if (itemsArr) {
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

export const {
  addItemCart,
  addItemByIdCart,
  removeItemByIdCart,
  removeAllItemCart,
  emtpyCart,
} = useCartSlice.actions;

export default useCartSlice.reducer;
