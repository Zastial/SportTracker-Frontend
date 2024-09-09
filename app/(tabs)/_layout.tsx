import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="mainPage"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <Ionicons name="menu" size={24} color={color} />,
        }}
      />        
      <Tabs.Screen
        name="football"
        options={{
          title: 'Football',
          tabBarIcon: ({ color }) => <Ionicons name="football" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="basketball"
        options={{
          title: 'Basketball',
          tabBarIcon: ({ color }) => <Ionicons name="basketball" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="formulaOne"
        options={{
          title: 'Formule 1',
          tabBarIcon: ({ color }) => <Ionicons name="car-sport" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}