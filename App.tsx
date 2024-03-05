import React from 'react';
import { ContextProvider } from './ContextProvider';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './components/HomeScreen';
import { DettaglioProdottoScreen } from './components/ProductDetailsScreen';


const Stack: any = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="DettaglioProdotto" component={DettaglioProdottoScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
