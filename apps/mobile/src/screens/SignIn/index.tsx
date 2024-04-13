import React from 'react';
import { Pressable, View, Text } from 'react-native';

interface SignInProps {}

const SignIn = (props: SignInProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
