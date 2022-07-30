import React, {useState,useEffect} from 'react';
import {Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import { Css } from '../assets/Css/css';
import config from '../config/config.json'

export default function Rastreio( { navigation } ){
    const [code, setCode] = useState(null);
    const [response, setResponse] = useState(null);

    //Envia os dados do formulário
    async function sendForm()
    {
        let response=await fetch(config.urlRoot+'rastreio',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: code
            })
        });
        let json=await response.json();
        setResponse(json);
    }

    return (
        <View style={Css.container}>
            <Image source={require('../assets/img/rastreio.png')} />

            <TextInput
                    placeholder='Digite o código de rastreio:'
                    onChangeText={text=>setCode(text)}
                style={[Css.login__input, Css.rastreio__inputMargin]}
            />

            <TouchableOpacity style={Css.login__button} onPress={()=>sendForm()}>
                <Text style={Css.login__buttonText}>Rastrear</Text>
            </TouchableOpacity>

            <Text>{response}</Text>
        </View>
    );

}
