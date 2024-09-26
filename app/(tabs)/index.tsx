import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, ScrollView, Text, Platform, RefreshControl, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SearchBar from '../components/searchBar';
import { sportList } from '../components/searchBar';
import { loadFavoriteStatus } from '../utils/Favorite';
import * as Progress from 'react-native-progress';
import { LightPalette, DarkPalette } from '../../constants/Palette';
import Favorites from '../components/favorites';
import { useColorScheme } from 'react-native';
import TopBar from '../components/topBar';

export default function MainPageScreen() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const colorScheme = useColorScheme();
  const palette = colorScheme === 'dark' ? DarkPalette : LightPalette;

  const fetchData = useCallback(async () => {
    try {
      const newFavorites: string[] = [];
      for (const sport of sportList) {
        const isFavorite = await loadFavoriteStatus(sport);
        if (isFavorite) {
          newFavorites.push(sport);
        }
      }
      setFavorites(newFavorites);
      setSelectedSport(newFavorites[0] || null);
    } catch (error) {
      console.log('Erreur lors de la récupération des données:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefreshKey(prevKey => prevKey + 1);
    fetchData();
  }, [fetchData]);

  
  const renderFavoriteItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: item === selectedSport ? palette.primary : palette.card,
        borderRadius: 10,
      }}
      onPress={() => setSelectedSport(item)}
    >
      <Text style={{ 
        color: item === selectedSport ? palette.background : palette.text,
        fontFamily: 'Poppins',
      }}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ 
      flex: 1,
      backgroundColor: palette.background,
      paddingTop: 50,
    }}>
      <TopBar pageName="SportTracker" />
      {loading && (
        <View style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: palette.background,
        }}>
          <Progress.CircleSnail 
            indeterminate={true} 
            color={palette.primary.toString()}
          />
        </View>
      )}
      {!loading && (
        favorites.length > 0 ? (
          <View style={{ flex: 1 }}>
            <View style={{ height: 50, paddingHorizontal: 10, paddingTop: 10, marginBottom: 10 }}>
              <FlatList
                data={favorites}
                renderItem={renderFavoriteItem}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={{ flex: 1 }}>
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                  <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                    tintColor={palette.primary}
                  />
                }
              >
                <Favorites favorites={favorites} refreshKey={refreshKey} />
              </ScrollView>
            </View>
          </View>
        ) : (
          <SearchBar router={undefined} />
        )
      )}
    </View>
  );
}