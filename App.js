import React from 'react';
// import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from './app/screens/WelcomeScreen';
import CurriculumScreen from './app/screens/CurriculumScreen';
import LessonScreen from './app/screens/LessonScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{title: 'Welcome'}}
        /> */}
        {/* <Stack.Screen
          name="Curriculum"
          component={CurriculumScreen}
          options={{title: 'Curriculum'}}
        /> */}
        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={{title: 'Time to Learn!'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};