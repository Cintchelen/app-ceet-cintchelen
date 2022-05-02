import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './telas/TelaInicial';
import Historia from './telas/Historia';
import Cursos from './telas/Cursos.js';
import Contato from './telas/Contato';
import Portal from './telas/Portal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="Cursos" component={Cursos} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Portal" component={Portal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
