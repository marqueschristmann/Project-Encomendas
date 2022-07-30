import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Initial, Home, Rastreio} from './Views/routes/index';
import AreaRestrita from "./Views/arearestrita/AreaRestrita";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Initial" component={Initial}
           options={{
           title:"Bem-Vindo",
           headerStyle:{backgroundColor:"#000"},
           headerTintColor:'#fff',
           headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
       }}
           />
          <Stack.Screen name="Login"  options={{headerShown:false}} component={Login}
           />
          <Stack.Screen name="Home" component={Home} 
            options={{
              title:"Inicio",
              headerStyle:{backgroundColor:"#000"},
              headerTintColor:'#ffff',
              headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
          }}
          />
          <Stack.Screen name="Rastreio" component={Rastreio}
            options={{
              headerStyle:{backgroundColor:"#000"},
              headerTintColor:'#fff',
              headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
          }}
           />
           <Stack.Screen options={{headerShown:false}} name="AreaRestrita" component={AreaRestrita} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

