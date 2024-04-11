import { useAppSelector } from '@/hooks';

export const useShoppingCartItems = () => useAppSelector(state => state.shoppingCart.items);
