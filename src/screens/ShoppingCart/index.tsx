import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import CartItem from '@/components/CartItem';
import FloatingButton from '@/components/FloatingButton/FloatingButton';
import ShoppingCartSummary from '@/components/ShoppingCartSummary';
import { useShoppingCartItems } from '@/store/cart/cart.selectors';

const styles = StyleSheet.create({
  emptyCartText: { textAlign: 'center', marginTop: 32, fontWeight: '600' },
});

const ShoppingCart = () => {
  const cartItems = useShoppingCartItems();
  if (!cartItems.length) {
    return <Text style={styles.emptyCartText}>Cart is empty</Text>;
  }

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListFooterComponent={ShoppingCartSummary}
      />
      <FloatingButton title="Checkout" onPress={() => {}} />
    </>
  );
};

export default ShoppingCart;
