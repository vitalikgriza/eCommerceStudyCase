import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

import { useAppDispatch } from '@/hooks';
import { logoutAction } from '@/store/auth/auth.actions';

export default () => {
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Pressable onPress={onLogout}>
      <MaterialIcons name="logout" size={24} color="gray" />
    </Pressable>
  );
};
