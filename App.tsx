import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import products from '@/data/products';
import ProductDetails from '@/screens/ProductDetails/ProductDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductDetails product={products[0]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
