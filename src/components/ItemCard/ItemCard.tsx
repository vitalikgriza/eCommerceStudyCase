import { Link } from 'expo-router';
import React, { memo } from 'react';
import { StyleSheet, Image } from 'react-native';

interface ItemCardProps {
  imageUrl: string;
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
  return (
    <Link href={`/product/${id}`} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.img} />
    </Link>
  );
});

export default ItemCard;
