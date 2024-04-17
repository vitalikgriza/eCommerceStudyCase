import React from 'react';
import { View, StyleSheet } from 'react-native';

import HeaderCartButton from '@/components/HeaderCartButton';
import HeaderOrderButton from '@/components/HeaderOrdersButton';

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HeaderRight = () => {
  return (
    <View style={styles.flexRow}>
      <HeaderOrderButton />
      <HeaderCartButton />
    </View>
  );
};

export default HeaderRight;
