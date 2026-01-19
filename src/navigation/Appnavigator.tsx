import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import HomeScreen from '../screens/HomeScreen';
import Step1Screen from '../screens/Step1Screen';
import Step2Screen from '../screens/Step2Screen';
import SummaryScreen from '../screens/SummaryScreen';

// Define the types for your routes for TypeScript safety
export type RootStackParamList = {
  Home: undefined;
  Step1: undefined;
  Step2: undefined;
  Summary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'User Profiles' }} 
        />
        <Stack.Screen 
          name="Step1" 
          component={Step1Screen} 
          options={{ title: 'Basic Info' }} 
        />
        <Stack.Screen 
          name="Step2" 
          component={Step2Screen} 
          options={{ title: 'Address Info' }} 
        />
        <Stack.Screen 
          name="Summary" 
          component={SummaryScreen} 
          options={{ title: 'Review Profile' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;