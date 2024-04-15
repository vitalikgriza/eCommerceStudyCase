import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-root-toast';

import { useCreateOrderMutation } from '@/api';
import CartItem from '@/components/CartItem';
import FloatingButton from '@/components/FloatingButton/FloatingButton';
import ShoppingCartSummary from '@/components/ShoppingCartSummary';
import { useAppDispatch } from '@/hooks';
import { useCartSubTotal, useDeliveryFee, useShoppingCartItems } from '@/store/cart/cart.selectors';
import { clearCart } from '@/store/cart/cart.slice';

const styles = StyleSheet.create({
  emptyCartText: { textAlign: 'center', marginTop: 48 },
});

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useShoppingCartItems();
  const [createOrder] = useCreateOrderMutation();
  const subTotal = useCartSubTotal();
  const deliveryFee = useDeliveryFee();

  if (!cartItems.length) {
    return <Text style={styles.emptyCartText}>Cart is empty</Text>;
  }

  const onCheckout = () => {
    console.log('onCheckout', Toast);
    createOrder({
      items: cartItems.map(item => item.product._id),
      subtotal: subTotal,
      deliveryFee,
      total: subTotal + deliveryFee,
    });
    Toast.show('Order created successfully', {
      duration: Toast.durations.LONG,
      position: 116,
    });
    dispatch(clearCart());
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListFooterComponent={ShoppingCartSummary}
      />
      <FloatingButton title="Checkout" onPress={onCheckout} />
    </>
  );
};

export default ShoppingCart;
