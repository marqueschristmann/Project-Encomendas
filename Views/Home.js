import React from 'react';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import {Css} from '../assets/Css/css';


export default function Home({ navigation })
{
    return (
     <View style={Css.container2}>

         <TouchableWithoutFeedback  style={Css.button__home} onPress={() => navigation.navigate('Login')}>
            <Image style={Css.Imag} source={require('../assets/img/sair.png')}/>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Rastreio')}>
            <Image style={Css.Imag} source={require('../assets/img/rastreio.png')}/>
        </TouchableWithoutFeedback>
     </View>
    );
}