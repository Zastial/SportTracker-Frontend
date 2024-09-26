import React from 'react';
import { View, ScrollView, Text, Platform, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchBar';
import { sportList } from '../components/searchBar';
import FormulaGPCard from '../components/formula1/GPCard';
import { loadFavoriteStatus } from '../utils/Favorite';
import { getFormulaGPs } from '../utils/API';

export default function MainPageScreen() {
  const router = useRouter();

  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const [formulaGPs, setFormulaGPs] = useState<any[]>([]);

  const fetchFormulaGPData = async () => {
    try {
      const data = await getFormulaGPs();
      setFormulaGPs(data);
      setRefreshing(false);
    } catch (error) {
      console.log('Erreur lors de la récupération des données Formula GP:', error);
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    setFavorites([]);
    for (const sport of sportList) {
      loadFavoriteStatus(sport).then(isFavorite => {
        if (isFavorite) {
          setFavorites(favorites => [...favorites, sport]);

          fetchFormulaGPData().then(() => {
            setLoading(false);
          });
        }
      });
    }
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchFormulaGPData();
  }, []);

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight + 50,
    }}>
      <StatusBar style="dark" />
      {loading ? <Text>Chargement...</Text> : (
          favorites.length > 0 ? (
            <ScrollView
              style={{ flex: 1 }}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              <FormulaGPCard gps={formulaGPs} />
            </ScrollView>
          ) :
          <>
            <Text>Votre programme est vide</Text>
            <Text>Choisissez un sport pour commencer :</Text>
            <SearchBar router={router} />
          </>
        )}
    </View>
  );
}