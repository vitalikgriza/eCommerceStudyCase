import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import { useAppDispatch } from '@/hooks';
import { changeQuantity } from '@/store/cart/cart.slice';
import { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const increaseQuantity = () => {
    dispatch(changeQuantity({ id: item.product.id, amount: 1 }));
  };

  const decreaseQuantity = () => {
    dispatch(changeQuantity({ id: item.product.id, amount: -1 }));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.size}>Size {item.size}</Text>

        <View style={styles.footer}>
          <Feather onPress={decreaseQuantity} name="minus-circle" size={24} color="gray" />
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Feather onPress={increaseQuantity} name="plus-circle" size={24} color="gray" />
          <Text style={styles.itemTotal}>{item.product.price * item.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
