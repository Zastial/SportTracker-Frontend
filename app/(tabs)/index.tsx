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


  const flatListOpacity = useRef(new Animated.Value(1)).current;
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: flatListOpacity } } }],
    { useNativeDriver: false }
  );
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
      <Text style={{ color: item === selectedSport ? palette.background : palette.text }}>
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
          <>
            <Animated.View style={{ opacity: flatListOpacity.interpolate({
                inputRange: [0, 50],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }) }}>
                <FlatList
                  data={favorites}
                  renderItem={renderFavoriteItem}
                  keyExtractor={(item) => item}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ paddingHorizontal: 10, paddingTop: 20 }}
                />
              </Animated.View>
            <ScrollView
              contentContainerStyle={{ paddingTop: 10 }}
              refreshControl={
                <RefreshControl 
                  refreshing={refreshing} 
                  onRefresh={onRefresh}
                  tintColor={palette.primary}
                />
              }
              onScroll={handleScroll}
              scrollEventThrottle={16}
            >
              <Favorites favorites={favorites} refreshKey={refreshKey} />
            </ScrollView>
          </>
        ) : (
          <SearchBar router={undefined} />
        )
      )}
    </View>
  );
}