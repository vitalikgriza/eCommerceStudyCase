import Toast, { ToastOptions } from 'react-native-root-toast';

export const showError = (message: string, options?: ToastOptions) => {
  Toast.show(message, {
    position: 116,
    duration: Toast.durations.LONG,
    backgroundColor: 'red',
    opacity: 0.9,
    ...options,
  });
};
