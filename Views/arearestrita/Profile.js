import React, {useState,useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Css } from '../../assets/Css/css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import config from '../../Backend/config/config.json'
import Fetch from 'react-native-fetch'

export default function Profile({navigation}) {

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
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let json=await response.json();
        setMsg(json);
    }


    return (
        <View style={[Css.container, Css.containerTop]}>

        <MenuAreaRestrita title='Perfil' navigation={navigation} />
        <Text style={Css.Text1}>Atualizar Usuario</Text>
        <Image style={Css.Imag5} source={require('../../assets/img/kisspng-symbol-yellow-oval-orange-users-5ab08fa6d30ee2.6676424115215205508645.jpg')} />
        <View>
            <Text>{msg}</Text>
            <TextInput placeholder='Senha Antiga:' onChangeText={text=>setSenhaAntiga(text)} style={Css.login__input}/>
            <TextInput style={Css.login__input} placeholder='Nova Senha:' onChangeText={text=>setNovaSenha(text)} />
            <TextInput style={Css.login__input} placeholder='Confirmação da Nova Senha:' onChangeText={text=>setConfNovaSenha(text)} />
            <TouchableOpacity style={Css.login__button} onPress={()=>sendForm()}>
                <Text style={Css.login__buttonText}>Trocar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}