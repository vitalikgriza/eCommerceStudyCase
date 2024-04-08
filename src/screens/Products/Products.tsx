import React from 'react';
import { FlatList, View } from 'react-native';

import ItemCard from '@/components/ItemCard/ItemCard';
import products from '@/data/products';

interface ProductsProps {}

const Products = (props: ProductsProps) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item: product }) => <ItemCard product={product} />}
        keyExtractor={product => product.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 4 }}
        contentContainerStyle={{ gap: 4 }}
      />
    </View>
  );
};

export default Products;
