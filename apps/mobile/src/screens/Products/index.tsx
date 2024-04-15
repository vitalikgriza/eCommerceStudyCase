import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import { useGetProductsQuery } from '@/api';
import ItemCard from '@/components/ItemCard/ItemCard';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <ActivityIndicator style={{ marginTop: 32 }} />;
  }

  return (
    <FlatList
      data={data || []}
      renderItem={({ item: product }) => <ItemCard id={product._id} imageUrl={product.image} />}
      keyExtractor={product => product._id}
      numColumns={2}
      columnWrapperStyle={{ gap: 4 }}
      contentContainerStyle={{ gap: 4 }}
    />
  );
};

export default Products;
