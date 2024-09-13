import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FavoriteButton from '../components/FavoriteButton';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="mainPage"
        options={{
          title: 'Accueil',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />        
      <Tabs.Screen
        name="football"
        options={{
          title: 'Football',
          tabBarIcon: ({ color }) => <Ionicons name="football" size={24} color={color} />,
          headerRight: () => <FavoriteButton sportName="football" />,
        }}
      />
      <Tabs.Screen
        name="basketball"
        options={{
          title: 'Basketball',
          tabBarIcon: ({ color }) => <Ionicons name="basketball" size={24} color={color} />,
          headerRight: () => <FavoriteButton sportName="basketball" />,
        }}
      />
      <Tabs.Screen
        name="formula1"
        options={{
          title: 'Formule 1',
          tabBarIcon: ({ color }) => <Ionicons name="car-sport" size={24} color={color} />,
          headerRight: () => <FavoriteButton sportName="formula1" />,
        }}
      />
    </Tabs>
  );
}