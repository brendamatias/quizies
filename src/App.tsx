import 'react-native-gesture-handler';

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './pages/Dashboard';
import Quizzes from './pages/Quizzes';
import Ranking from './pages/Ranking';
import Quizz from './pages/Quizz';
import ResultQuizz from './pages/ResultQuizz';
import COLORS from './constants/theme';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const QuizzStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: COLORS.background,
      },
    }}
  >
    <HomeStack.Screen name="Dashboard" component={Dashboard} />
  </HomeStack.Navigator>
);

const QuizzStackScreen = () => (
  <QuizzStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <QuizzStack.Screen name="Quizz" component={Quizz} />
    <QuizzStack.Screen name="ResultQuizz" component={ResultQuizz} />
  </QuizzStack.Navigator>
);

const TabsScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: COLORS.primary,
      inactiveTintColor: '#D1D3D8',
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={HomeStackScreen}
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
      name="Quizzes"
      component={Quizzes}
      options={{
        tabBarLabel: 'Quizzes',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon name="th-list" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Quizz" component={QuizzStackScreen} />
  </Drawer.Navigator>
);

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
    />
    <DrawerScreen />
  </NavigationContainer>
);

export default App;
