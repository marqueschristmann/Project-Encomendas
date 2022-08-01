import React, {useState,useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { Css } from '../../assets/Css/css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import config from '../../config/config.json'

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

            <View>
                <Image style={Css.Imag1} source={require('../../assets/img/2020_03_26_envio_de_encomendas_pelo_correio_como_fazer_1.png')} />

                <Text style={Css.Text1}> Recuperar Senha</Text>
                <Text>{msg}</Text>
                <TextInput placeholder='Senha Antiga:' onChangeText={text=>setSenhaAntiga(text)} />
                <TextInput placeholder='Nova Senha:' onChangeText={text=>setNovaSenha(text)} />
                <TextInput placeholder='Confirmação da Nova Senha:' onChangeText={text=>setConfNovaSenha(text)} />
                <TouchableOpacity onPress={()=>sendForm()}>
                    <Text>Trocar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}