import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import { useCartSubTotal, useDeliveryFee } from '@/store/cart/cart.selectors';

interface ShoppingCartSummaryProps {}

const ShoppingCartSummary = (props: ShoppingCartSummaryProps) => {
  const subTotal = useCartSubTotal();
  const deliveryFee = useDeliveryFee();
  const total = subTotal + deliveryFee;
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};

export default ShoppingCartSummary;
