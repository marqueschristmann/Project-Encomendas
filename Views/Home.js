import React from 'react';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import {Css} from '../assets/Css/css';



export default function Home({ navigation })
{
    return (
     <View style={Css.container}>
        
        <View style={Css.container3}>
        <Text style = {Css.Text1}> Rastreio tempo Real </Text>
        <Image style={Css.Imag1} source={require('../assets/img/134313_entenda_o_que_e_compra_assistida_e_como_ela_funciona_1.png')}/>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('Rastreio')}>
            <Image style={Css.Imag3} source={require('../assets/img/rastreio.png')}/>
        </TouchableWithoutFeedback>
        <Text style = {Css.Text}> Clique no Item Acima </Text>
        </View>
        <Text  onPress={() => navigation.navigate('Initial')} style={Css.Inicio__button} > Voltar ao Inicio </Text>
     </View>
    );
}