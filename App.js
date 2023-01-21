import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';

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

export default App;