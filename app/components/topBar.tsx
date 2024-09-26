import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { sportList } from './searchBar';
import { useColorScheme } from 'react-native';
import { LightPalette, DarkPalette } from '../../constants/Palette';
import FavoriteButton from './favoriteButton';

interface TopBarProps {
    pageName: string;
}

const TopBar: React.FC<TopBarProps> = ({ pageName }) => {
    const router = useRouter();
    const [menuVisible, setMenuVisible] = React.useState(false);

    const colorScheme = useColorScheme();
    const palette = colorScheme === 'dark' ? DarkPalette : LightPalette;
  
    const handleAccueilPress = () => {
        setMenuVisible(false);
        router.push(`/(tabs)` as const);
    }

    const handleSportPress = (sport: string) => {
        setMenuVisible(false);
        const routeName = sport.toLowerCase();
        router.push(`/(tabs)/${routeName}` as const);
    };
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    return (
      <View>
        <View style={[styles.container, { backgroundColor: palette.background }]}>
          <TouchableOpacity style={styles.burgerMenu} onPress={toggleMenu}>
            <Ionicons name="menu" size={36} color={palette.text} />
          </TouchableOpacity>
          <Text style={[styles.title, { color: palette.text }]}>{pageName}</Text>
          <FavoriteButton sportName={pageName} />
        </View>
        {menuVisible && (
          <View style={[styles.menuContent, { backgroundColor: palette.background }]}>
            
            <TouchableOpacity key={"accueil"} onPress={() => handleAccueilPress()}>
                <Text style={[styles.menuItem, { color: palette.text }]}>Accueil</Text>
            </TouchableOpacity>

            <Text style={[styles.menuItemTitle, { color: palette.text }]}>SPORTS</Text>
            {sportList.map((sport) => (
              <TouchableOpacity key={sport} onPress={() => handleSportPress(sport)}>
                <Text style={[styles.menuItem, { color: palette.text }]}>{sport}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
};
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  burgerMenu: {
    position: 'relative',
  },
  menuContent: {
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 1000,
    width: '100%',
  },
  menuItemTitle: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins',
  },
  menuItem: {
    fontFamily: 'Poppins',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});
  
export default TopBar;