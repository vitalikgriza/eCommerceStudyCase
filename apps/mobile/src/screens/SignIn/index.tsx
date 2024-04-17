import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

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
    } catch (e) {
      // setError(e.data);
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  welcome: {
    marginTop: 120,
    marginBottom: 64,
    fontFamily: 'InterSemi',
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'InterSemi',
    fontSize: 24,
    color: 'dimgray',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default SignIn;
