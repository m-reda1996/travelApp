import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/homeScreen';
import { Discover } from './screens/disCover';
import { ItemScreen } from './screens/itemScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home"  component={HomeScreen} />
        <Stack.Screen name="Discover"  component={Discover} />
        <Stack.Screen name='ItemScreen' component={ItemScreen}   />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;