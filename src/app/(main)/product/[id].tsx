import { useLocalSearchParams } from 'expo-router';

import products from '@/data/products';
import ProductDetails from '@/screens/ProductDetails';

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return <ProductDetails product={products[parseInt(id, 10) - 1]} />;
};
