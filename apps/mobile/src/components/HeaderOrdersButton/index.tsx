import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

const HeaderOrderButton = () => {
  return (
    <Link href="/orders" asChild>
      <Pressable>
        <MaterialCommunityIcons name="file-document-edit" size={21} color="gray" />
      </Pressable>
    </Link>
  );
};

export default HeaderOrderButton;
