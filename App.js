import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Home"
        component={HomeScreen}
        options={{title:'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) =>{
  return(
    <Button
      title = "Library"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Cats'})
      }
    />
    
  );
}
const ProfileScreen = ({navigation, route}) => {
  return <text>Hello</text>
}

export default App;