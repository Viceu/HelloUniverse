import React from 'react';
// import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from './app/screens/WelcomeScreen';
import Milestones from './app/screens/Milestones';
import LessonScreen from './app/screens/LessonScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{title: 'WelcomeScreen'}}
        />
        <Stack.Screen
          name="Milestones"
          component={Milestones}
          options={{title: 'Milestones'}}
        />
        <Stack.Screen
          name="LessonScreen"
          component={LessonScreen}
          options={{title: 'Time to Learn!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};