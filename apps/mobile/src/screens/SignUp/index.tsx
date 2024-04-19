import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';

import styles from './styles';

import { useAppDispatch } from '@/hooks';
import { registerAction } from '@/store/auth/auth.actions';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const onSignUpPressed = async () => {
    setError('');
    try {
      await dispatch(registerAction({ email, password })).unwrap();
      router.replace('products');
    } catch (e: any) {
      setError(e.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Create Account</Text>
      <View style={styles.content}>
        <Text style={styles.title}>New user</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Username"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <Button title="Sign up" onPress={onSignUpPressed} />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <Pressable style={styles.signInBtn} onPress={router.back}>
          <Text>
            Have an account? <Text style={styles.signInText}>Sign in</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
