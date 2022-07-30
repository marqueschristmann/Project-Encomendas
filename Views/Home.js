import React from 'react';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import {Css} from '../assets/Css/css';



export default function Home({ navigation })
{
    return (
        
     <View style={Css.container}>
        
        <View style={Css.container3}>
         <Text style = {Css.Text1}> Rastreie suas encomendas em tempo real </Text>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('Rastreio')}>
            <Image style={Css.Imag3} source={require('../assets/img/rastreio.png')}/>
        </TouchableWithoutFeedback>

         <TouchableWithoutFeedback  style={Css.button__home} onPress={() => navigation.navigate('Initial')}>
            <Image style={Css.Imag3} source={require('../assets/img/sair.png')}/>
        </TouchableWithoutFeedback>
        </View>
     </View>
    );
}