import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Ranking from '../pages/Ranking';
import Quizz from '../pages/Quizz';
import ResultQuizz from '../pages/ResultQuizz';

import COLORS from '../constants/theme';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: '#D1D3D8',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarLabel: 'Ranking',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Icon name="trophy" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Icon name="user" size={size} color={color} solid />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: COLORS.background,
      },
    }}
  >
    <App.Screen name="Stack" component={TabScreen} />
    <App.Screen name="Quizz" component={Quizz} />
    <App.Screen name="ResultQuizz" component={ResultQuizz} />
  </App.Navigator>
);

export default AppRoutes;
