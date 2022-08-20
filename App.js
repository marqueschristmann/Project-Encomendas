import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Initial, Home, Rastreio} from './Views/routes/index';
import AreaRestrita from "./Views/arearestrita/AreaRestrita";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from "expo-notifications";
import config from './Backend/config/config.json'


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
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      setExpoPushToken(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
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

