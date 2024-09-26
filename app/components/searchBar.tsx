import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import SportSearchCard from './sportSearchCard';

export const sportList = ['Football', 'Basketball', 'Formula1'];

interface SearchBarProps {
  router: ReturnType<typeof useRouter>;
}
  
export default class SearchBar extends React.Component<SearchBarProps> {
  state = {
    searchQuery: '',
    filteredSports: sportList,
  };

  handleSearch = (text : string) => {
    const filteredSports = sportList.filter(sport =>
      sport.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ searchQuery: text, filteredSports });
  };

  handleSportPress = (sport: string) => {
    const routeName = sport.toLowerCase();
    this.props.router.push(`/(tabs)/${routeName}` as any);
  };

  sportCards() {
    const cards: React.JSX.Element[] = []
    this.state.filteredSports.forEach(sport => {
      cards.push(
      <SportSearchCard key={sport} sportName={sport} onPress={() => this.handleSportPress(sport)} />)
    })
    return cards
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Rechercher un sport"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          value={this.state.searchQuery}
          onChangeText={this.handleSearch}
        />
        <FlatList
          data={this.sportCards()}
          renderItem={({ item }) => <Text>{item}</Text>}
          numColumns={2}
        />
      </View>
    );
  }
}