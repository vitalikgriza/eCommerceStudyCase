import React from 'react';
import { FlatList, View, Image, useWindowDimensions, Text, ScrollView } from 'react-native';

import FloatingButton from '@/components/FloatingButton/FloatingButton';
import styles from '@/screens/ProductDetails/styles';
import { Product } from '@/types';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { width } = useWindowDimensions();
  const { name, price, images, description } = product;

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={images || []}
          renderItem={({ item: uri }) => (
            <Image source={{ uri }} style={{ width, aspectRatio: 1 }} />
          )}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
      </ScrollView>
      <FloatingButton
        title="Add to card"
        onPress={() => {
          console.log('press add to cart');
        }}
      />
    </View>
  );
};

export default ProductDetails;
