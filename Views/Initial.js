import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Initial({ navigation }) {
    return (
      <View>
         <Text> App Encomendas Delivery </Text>
         <Text> Bem vindo ao app de encomendas aqui você contrata seu serviço </Text>
        <Button title ="Proximo" onPress={() => navigation.navigate('Login')}/>
      </View>
    );
}