import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

const HeaderCartButton = () => {
  return (
    <Link href="/shopping-cart" asChild>
      <Pressable style={styles.flexRow}>
        <FontAwesome5 name="shopping-cart" size={18} color="gray" />
        <Text style={styles.badge}>1</Text>
      </Pressable>
    </Link>
  );
};

export default HeaderCartButton;
