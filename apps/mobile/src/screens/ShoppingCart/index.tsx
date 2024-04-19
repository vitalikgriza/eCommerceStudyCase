import { useStripe } from '@stripe/stripe-react-native';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-root-toast';

import { useCreateOrderMutation, useCreatePaymentIntentMutation } from '@/api';
import CartItem from '@/components/CartItem';
import FloatingButton from '@/components/FloatingButton/FloatingButton';
import ShoppingCartSummary from '@/components/ShoppingCartSummary';
import { showError } from '@/components/Toasts/showError';
import { showSuccess } from '@/components/Toasts/showSuccess';
import { useAppDispatch } from '@/hooks';
import { useCartSubTotal, useDeliveryFee, useShoppingCartItems } from '@/store/cart/cart.selectors';
import { clearCart } from '@/store/cart/cart.slice';

const styles = StyleSheet.create({
  emptyCartText: { textAlign: 'center', marginTop: 48 },
});

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartItems = useShoppingCartItems();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [createOrder] = useCreateOrderMutation();
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const subTotal = useCartSubTotal();
  const deliveryFee = useDeliveryFee();
  const total = subTotal + deliveryFee;

  if (!cartItems.length) {
    return <Text style={styles.emptyCartText}>Cart is empty</Text>;
  }

  const onCreateOrder = async () => {
    await createOrder({
      items: cartItems,
      subtotal: subTotal,
      deliveryFee,
      total,
    });
    showSuccess('Order created successfully');
    dispatch(clearCart());
    router.replace('/orders');
  };

  const onCheckout = async () => {
    const resp = await createPaymentIntent({ amount: Math.floor(total * 100) });
    if ('error' in resp) {
      showError('Failed to process payment');
      return;
    }

    const initPaymentResponse = await initPaymentSheet({
      merchantDisplayName: 'My Ecommerce Store',
      paymentIntentClientSecret: resp.data,
    });

    if (initPaymentResponse.error) {
      showError('Failed to process payment');
      return;
    }

    const paymentResp = await presentPaymentSheet();
    if (paymentResp.error) {
      if (paymentResp.error.code !== 'Canceled') {
        showError('Failed to process payment');
      }
      return;
    }
    await onCreateOrder();
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListFooterComponent={ShoppingCartSummary}
      />
      <FloatingButton title="Checkout" onPress={onCheckout} />
    </>
  );
};

export default ShoppingCart;
