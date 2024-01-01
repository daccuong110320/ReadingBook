import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/Home/HomeScreen';
import NotificationsScreen from './pages/Notifications/NotificationsScreen';
import LibraryScreen from './pages/LibraryScreen';
import LoginScreen from './pages/Login/LoginScreen';
import RegisterScreen from './pages/Register/RegisterScreen';
import ProfileScreen from './pages/More/MoreScreen';
import DetailProfileScreen from './pages/More/Profile/DetailProfileScreen';

import { Ionicons } from '@expo/vector-icons';
import AuthContext from './utils/AuthContext';
import Colors from './shared/colors';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './assets/themes/theme';

import { StatusBar } from 'react-native';
import ChangeInformationScreen from './pages/More/Profile/ChangeInformationScreen';
import ResetPasswordScreen from './pages/More/Profile/ResetPasswordScreen';
StatusBar.setBarStyle('dark-content');
StatusBar.setBackgroundColor('white');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = ({ isLoggedIn }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
  name="MoreScreen"
  options={{
    tabBarLabel: () => null,
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="person" size={size} color={color} />
    ),
  }}
>
  {({ navigation, route }) => (
    <ProfileScreen
      isLoggedIn={isLoggedIn}
      navigation={navigation}
      route={route}
    />
  )}
</Tab.Screen>
    </Tab.Navigator>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, updateLoggedInStatus }}>
       <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="HomeTabs">
              {() => <HomeTabs isLoggedIn={isLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="DetailProfile" component={DetailProfileScreen} />
            <Stack.Screen name="ChangeInformation" component={ChangeInformationScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} /> 
          </Stack.Navigator>
        </NavigationContainer>
       </PaperProvider>
    </AuthContext.Provider>
  );
};

export default App;