import React from 'react';
import { FlatList } from 'react-native';

import ItemCard from '@/components/ItemCard/ItemCard';
import products from '@/data/products';

const Products = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item: product }) => <ItemCard id={product.id} imageUrl={product.image} />}
      keyExtractor={product => product.id}
      numColumns={2}
      columnWrapperStyle={{ gap: 4 }}
      contentContainerStyle={{ gap: 4 }}
    />
  );
};

export default Products;
