import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
interface CartItemProps {
  item: {
    product: {
      image: string;
      name: string;
    };
    size: string;
    quantity: number;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const increaseQuantity = () => {};

  const decreaseQuantity = () => {};

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.size}>Size {item.size}</Text>

        <View style={styles.footer}>
          <Feather onPress={increaseQuantity} name="minus-circle" size={24} color="gray" />
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Feather onPress={decreaseQuantity} name="plus-circle" size={24} color="gray" />
          <Text style={styles.itemTotal}>$320.0</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
