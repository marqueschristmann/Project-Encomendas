import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Initial, Home, Rastreio} from './Views/routes/index';
import AreaRestrita from "./Views/arearestrita/AreaRestrita";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo';
import config from './config/config.json'

export default function App() {
  const Stack = createStackNavigator();
  const [expoPushToken, setExpoPushToken] = useState(null);

  useEffect(()=>{
    registerForPushNotificationsAsync();
  },[]);

  useEffect(()=>{
    if(expoPushToken != null){
        sendToken();
    }
  },[expoPushToken]);


//Registra o token do usuário
  async function registerForPushNotificationsAsync(){
      if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
              const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
              finalStatus = status;
          }
          if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
          }
          const token = await Notifications.getExpoPushTokenAsync();
          setExpoPushToken(token);
      } else {
          alert('Must use physical device for Push Notifications');
      }

      if (Platform.OS === 'android') {
          Notifications.createChannelAndroidAsync('default', {
              name: 'default',
              sound: true,
              priority: 'max',
              vibrate: [0, 250, 250, 250],
          });
      }
  }
    //Envio do token
  async function sendToken()
  {
      let response=await fetch(config.urlRoot+'token',{
          method:'POST',
          headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
          },
          body: JSON.stringify({
              token: expoPushToken
          })
      });
  }

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

