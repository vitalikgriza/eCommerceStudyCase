import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import { useCreateOrderMutation } from '@/api';
import CartItem from '@/components/CartItem';
import FloatingButton from '@/components/FloatingButton/FloatingButton';
import ShoppingCartSummary from '@/components/ShoppingCartSummary';
import { useCartSubTotal, useDeliveryFee, useShoppingCartItems } from '@/store/cart/cart.selectors';

const styles = StyleSheet.create({
  emptyCartText: { textAlign: 'center', marginTop: 32, fontWeight: '600' },
});

const ShoppingCart = () => {
  const cartItems = useShoppingCartItems();
  const [createOrder] = useCreateOrderMutation();
  const subTotal = useCartSubTotal();
  const deliveryFee = useDeliveryFee();

  if (!cartItems.length) {
    return <Text style={styles.emptyCartText}>Cart is empty</Text>;
  }

  const onCheckout = () => {
    createOrder({
      items: cartItems,
      subtotal: subTotal,
      deliveryFee,
      total: subTotal + deliveryFee,
    });
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
