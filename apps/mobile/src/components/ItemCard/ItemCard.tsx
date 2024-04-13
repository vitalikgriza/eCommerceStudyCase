import { Link, useRouter } from 'expo-router';
import React, { memo } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

import { useAppDispatch } from '@/hooks';
import { setSelectedProduct } from '@/store/products/products.slice';

interface ItemCardProps {
  imageUrl?: string;
  id: string;
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

const ItemCard = memo(({ imageUrl, id }: ItemCardProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onPress = () => {
    dispatch(setSelectedProduct(id));
    router.push(`/product/${id}`);
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.img} />
    </Pressable>
  );
});

export default ItemCard;
