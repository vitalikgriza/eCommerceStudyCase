import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

import { Product } from '@/types';

interface ItemCardProps {
  product: Product;
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  img: {
    width: '100%',
    aspectRatio: 1,
  },
});

const ItemCard = ({ product }: ItemCardProps) => {
  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.img} />
    </Pressable>
  );
};

export default ItemCard;
