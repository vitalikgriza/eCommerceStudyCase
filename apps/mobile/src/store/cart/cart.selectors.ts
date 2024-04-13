import { createSelector } from '@reduxjs/toolkit';

import { DELIVERY_FEE_MARGIN } from '@/constants';
import { useAppSelector } from '@/hooks';
import { RootState } from '@/store';

export const useShoppingCartItems = () => useAppSelector(state => state.shoppingCart.items);

export const useCartItemsSize = () => useAppSelector(state => state.shoppingCart.items.length);

const subTotalSelector = (state: RootState) =>
  state.shoppingCart.items.reduce(
    (subTotal, item) => subTotal + item.product.price * item.quantity,
    0,
  );

export const useCartSubTotal = () => useAppSelector(subTotalSelector);

const deliveryFeeSelector = createSelector(
  [subTotalSelector, (state: RootState) => state.shoppingCart.deliveryFee],
  (subTotal, deliverFee) => (subTotal > DELIVERY_FEE_MARGIN ? 0 : deliverFee),
);

export const useDeliveryFee = () => useAppSelector(deliveryFeeSelector);
