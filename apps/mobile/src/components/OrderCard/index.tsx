import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import { Order } from '@/types';

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 16 }}>
        Reference number:
        <Text style={[styles.boldText, { fontStyle: 'italic' }]}> {order.referenceNumber}</Text>
      </Text>
      <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
        <View style={styles.details}>
          <View style={styles.flexRow}>
            <MaterialCommunityIcons name="shoe-sneaker" size={28} color="gray" />
            <Text style={styles.mediumText}>
              {order.items.reduce((acc, item) => acc + item.quantity || 0, 0)}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <MaterialIcons name="delivery-dining" size={24} color="gray" />
            <Text style={styles.mediumText}>${order.deliveryFee}</Text>
          </View>
          <View style={styles.flexRow}>
            <MaterialIcons name="attach-money" size={22} color="gray" />
            <Text style={styles.mediumText}>${order.subtotal}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.mediumText}>Total: ${order.total}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
