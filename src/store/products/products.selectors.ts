import { useAppSelector } from '@/hooks';

export const useSelectedProduct = () => useAppSelector(state => state.products.selectedProduct);

export const useProducts = () => useAppSelector(state => state.products.products);
