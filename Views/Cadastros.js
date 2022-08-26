import React, {useState,useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Css } from '../assets/Css/css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../Backend/config/config.json'
import Fetch from 'react-native-fetch'

export default function Cadastros({navigation}) {

    const [idUser, setIdUser] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);

    useEffect(()=>{
       async function getIdUser()
       {
           let response=await AsyncStorage.getItem('userData');
           let json=JSON.parse(response);
           setIdUser(json.id);
       }
       getIdUser();
    });

    async function sendForm()
    {
        let response=await fetch(`${config.urlRoot}verifyPass`,{
            method:'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
        });
        let json=await response.json();
        setMsg(json);
    }


    return (
        <View style={[Css.container, Css.containerTop]}>
            <Image style={Css.Imag4} source={require('../assets/img/2020_03_26_envio_de_encomendas_pelo_correio_como_fazer_1.png')} />
            
            <View>
                <Text style={Css.Text1}>Criar usuario</Text>
                <Text>{msg}</Text>
                <TextInput placeholder='Nome do usuário:' onChangeText={text=>setSenhaAntiga(text)} style={Css.login__input}/>
                <TextInput style={Css.login__input} placeholder=' Senha:' onChangeText={text=>setNovaSenha(text)} />
                <TextInput style={Css.login__input} placeholder='Confirmação da Nova Senha:' onChangeText={text=>setConfNovaSenha(text)} />
                <TouchableOpacity style={Css.login__button} onPress={()=>sendForm()}>
                    <Text style={Css.login__buttonText}> Cadastrar </Text>
                </TouchableOpacity>
                <Text  onPress={() => navigation.navigate('Login')} style={Css.Inicio__button} > Finalizado </Text>
            </View>
        </View>
    );
}