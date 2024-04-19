import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';

import styles from './styles';

import { useAppDispatch } from '@/hooks';
import { loginAction } from '@/store/auth/auth.actions';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const onSignInPressed = async () => {
    try {
      await dispatch(loginAction({ email, password })).unwrap();
      router.replace('products');
    } catch (e: any) {
      if (e.error) {
        setError(e.error);
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome back</Text>
      <View style={styles.content}>
        <Text style={styles.title}>Sign in</Text>
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
        <Button title="Sign in" onPress={onSignInPressed} />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <Link href="/sign-up" asChild>
          <Pressable style={styles.signUpBtn}>
            <Text>
              Don't have an account? <Text style={styles.signUpText}>Sign up</Text>
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
