import React from 'react';
import { View, Text, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { sportList } from '../components/searchBar';
import { loadFavoriteStatus } from '../utils/Favorite';

export default function MainPageScreen() {
  const router = useRouter();

  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    for (const sport of sportList) {
      loadFavoriteStatus(sport).then(favoriteSport => {
        favorites.push(favoriteSport);
        setLoading(false);
      });
    }
  }, []);

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight + 50,
    }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {loading ? <Text>Chargement...</Text> : (
          favorites.length > 0 ? (
            <>
              <SearchBar router={router} />
            </>
          ) :
          <>
            <Text>Votre programme est vide</Text>
            <Text>Choisissez un sport pour commencer :</Text>
            <SearchBar router={router} />
          </>
        )}
      </View>
    </View>
  );
}