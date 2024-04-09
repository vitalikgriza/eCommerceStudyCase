import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface ShoppingCartSummaryProps {}

const ShoppingCartSummary = (props: ShoppingCartSummaryProps) => {
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>160 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>160 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>160 US$</Text>
      </View>
    </View>
  );
};

export default ShoppingCartSummary;
