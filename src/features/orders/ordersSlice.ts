import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import { v4 as uuid } from 'uuid';

const ordersAdapter = createEntityAdapter({
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  selectId: (order) => order.id,
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = ordersAdapter.getInitialState({
  totalCount: 0,
});

const useOrdersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addCartOrders: (state, action) => {
      const cart = action.payload;
      const newOrder = {
        cart,
        id: uuid(),
        // TODO: Refactor to universal date object for comparing dates.
        date: format(new Date(), 'MM/dd/yyyy'),
      };

      ordersAdapter.upsertOne(state, newOrder);
    },
    removeBeer: (state, action) => {
      const orderId = action.payload.id;

      if (orderId) {
        ordersAdapter.removeOne(state, orderId);

        state.totalCount--;
      }
    },
  },
});

export const {
  selectAll: selectAllOrders,
  selectById: selectOrderById,
  selectIds: selectOrderIds,
// @ts-expect-error TS(2571): Object is of type 'unknown'.
} = ordersAdapter.getSelectors((state) => state.orders);

export const { addCartOrders, removeBeer } = useOrdersSlice.actions;

export const selectTotalCartQuantity = (state: any) => state.orders.totalCount;

export default useOrdersSlice.reducer;
