import React from 'react';
import { View, Text } from 'react-native';

import { useGetUserOrdersQuery } from '@/api';

const Orders = () => {
  const { data: orders } = useGetUserOrdersQuery();

  if (!orders) {
    return <Text style={{ textAlign: 'center', marginTop: 48 }}>No Orders</Text>;
  }

  return (
    <View>
      {orders.map(order => (
        <View key={order.referenceNumber}>
          <Text>{order.referenceNumber}</Text>
        </View>
      ))}
    </View>
  );
};

export default Orders;
