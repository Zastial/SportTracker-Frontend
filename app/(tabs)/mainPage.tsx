import React from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

import SearchBar from '../components/searchBar';

export default function MainPageScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Votre programme est vide</Text>
      <Text>Choisissez un sport pour commencer :</Text>
      <SearchBar router={router} />

    </View>
  );
}