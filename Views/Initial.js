import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import {Css} from '../assets/Css/css';

export default function Initial({ navigation }) {
    return (
      <View style={Css.container3}>
         <Image style = {Css.Imag2} source={require('../assets/img/entrega_encomenda_correios_0517_1400x1196_1.png')}/>

         <Text style = {Css.Text1}> App Encomendas Delivery </Text>
         <Text style = {Css.Text2}> Bem vindo ao app de encomendas aqui você contrata seu serviço </Text>
              <Button color={'#000'} title ="Proximo" onPress={() => navigation.navigate('Home')}/>
              <Text  onPress={() => navigation.navigate('Login')} style={Css.Inicio__button} > Clique aqui se você empresa </Text>
      </View>
    );
}