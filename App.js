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
           headerStyle:{backgroundColor:"#EFF259"},
           headerTintColor:'#333',
           headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
       }}
           />
          <Stack.Screen name="Login"  options={{headerShown:false}} component={Login}
           />
          <Stack.Screen name="Home" component={Home} 
            options={{
              title:"Usuario",
              headerStyle:{backgroundColor:"#EFF259"},
              headerTintColor:'#333',
              headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
          }}
          />
          <Stack.Screen name="Rastreio" component={Rastreio}
            options={{
              headerStyle:{backgroundColor:"#EFF259"},
              headerTintColor:'#333',
              headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
          }}
           />
           <Stack.Screen options={{headerShown:false}} name="AreaRestrita" component={AreaRestrita} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

