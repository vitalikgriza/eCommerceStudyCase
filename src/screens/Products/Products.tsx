import React from 'react';
import { FlatList } from 'react-native';

import ItemCard from '@/components/ItemCard/ItemCard';
import products from '@/data/products';

interface ProductsProps {}

const Products = (props: ProductsProps) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item: product }) => <ItemCard imageUrl={product.image} />}
      keyExtractor={product => product.id}
      numColumns={2}
      columnWrapperStyle={{ gap: 4 }}
      contentContainerStyle={{ gap: 4 }}
    />
  );
};

export default Products;
