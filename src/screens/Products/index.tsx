import React from 'react';
import { FlatList } from 'react-native';

import ItemCard from '@/components/ItemCard/ItemCard';
import { useProducts } from '@/store/products/products.selectors';

const Products = () => {
  const products = useProducts();

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
