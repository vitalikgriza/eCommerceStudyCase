import React from 'react';
import { Text, FlatList } from 'react-native';

import { useGetUserOrdersQuery } from '@/api';
import OrderCard from '@/components/OrderCard';

const Orders = () => {
  const { data: orders } = useGetUserOrdersQuery();

  if (!orders) {
    return <Text style={{ textAlign: 'center', marginTop: 48 }}>No Orders</Text>;
  }

  return (
    <FlatList
      data={orders}
      keyExtractor={order => order.referenceNumber}
      renderItem={({ item }) => <OrderCard order={item} />}
      contentContainerStyle={{ padding: 16, gap: 8 }}
    />
  );
};

export default Orders;
