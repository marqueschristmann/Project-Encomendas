import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Css} from '../assets/Css/css';
import config from '../Backend/config/config.json'


export default function Login({ navigation })
{
    const [display, setDisplay]=useState('none');
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);

    async function sendForm()
    {
        let response=await fetch(`${config.urlRoot}login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
            await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('AreaRestrita');
        }
    }


    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[Css.container, Css.darkbg]}>
            <View style={Css.login__logomarca}>
                <Image style={Css.Imag3} source={require('../assets/img/Logomarca.png')} />
            </View>

            <View>
                <Text style={Css.login__msg(display)}>Usuário ou senha inválidos!</Text>
            </View>
            
            <View style={Css.login__form}>
                <TextInput style={Css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)} />
                <TextInput style={Css.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
                <TouchableOpacity style={Css.login__button} onPress={()=>sendForm()}>
                    <Text style={Css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text  onPress={() => navigation.navigate('Cadastros')} style={Css.Inicio__button} > Cadastro </Text>
                <Text onPress={() => navigation.navigate('Initial')} style={Css.Inicio} > -- BACK -- </Text>
            </View>

            <View>
            </View>
        </KeyboardAvoidingView>
    );
}