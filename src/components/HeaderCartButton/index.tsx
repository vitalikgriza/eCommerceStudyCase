import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

import { useCartItemsSize } from '@/store/cart/cart.selectors';

const HeaderCartButton = () => {
  const cartItemsNumber = useCartItemsSize();
  return (
    <Link href="/shopping-cart" asChild>
      <Pressable style={styles.flexRow}>
        <FontAwesome5 name="shopping-cart" size={18} color="gray" />
        {cartItemsNumber > 0 && <Text style={styles.badge}>{cartItemsNumber}</Text>}
      </Pressable>
    </Link>
  );
};

export default HeaderCartButton;
