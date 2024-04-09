import React from 'react';
import { Pressable, PressableProps, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface FloatingButtonProps extends PressableProps {
  title: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 50,
    width: '90%',
    bottom: 24,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

const FloatingButton = ({ title, style, ...restPressableProps }: FloatingButtonProps) => {
  return (
    <Pressable {...restPressableProps} style={[styles.button, style as StyleProp<ViewStyle>]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default FloatingButton;
