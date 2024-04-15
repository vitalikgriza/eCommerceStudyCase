import { useRouter } from 'expo-router';
import React, { memo } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

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
  const router = useRouter();
  const onPress = () => {
    router.push(`/product/${id}`);
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.img} />
    </Pressable>
  );
});

export default ItemCard;
