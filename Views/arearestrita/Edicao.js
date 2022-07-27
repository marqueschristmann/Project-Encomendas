import React, {useState,useEffect} from 'react';
import {Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Css } from '../../assets/Css/css';
import config from '../../config/config.json'

export default function Edicao({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');
    const [displayForm, setDisplayForm] = useState('none');
    const [code, setCode] = useState(null);
    const [product, setProduct] = useState(null);
    const [localization, setLocalization] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    //Leitura do código QR
    async function handleBarCodeScanned({ type, data }){
        setScanned(true);
        setDisplayQR('none');
        setDisplayForm('flex');
        setCode(data);
        await searchProduct(data);
    }
    
    async function searchProduct(codigo) {
        let response=await fetch(config.urlRoot+'searchProduct',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: codigo
            })
        });
        let json=await response.json();
        setProduct(json.Products[0].name);
    }

    async function sendForm() {

    }

    return (
        <View>
            <MenuAreaRestrita title='Edição' navigation={navigation} />

            <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : value=>handleBarCodeScanned(value)}
                style={Css.qr__code(displayQR)}
            />

            <View style={Css.qr__form(displayForm)}>
                <Text>Código do Produto: {code}</Text>

                <View style={Css.login__input}>
                    <TextInput
                            placeholder='Nome do Produto:'
                            onChangeText={text=>setProduct(text)}
                        value={product}
                    />
                </View>

                <View style={Css.login__input}>
                    <TextInput
                            placeholder='Localização do Produto:'
                            onChangeText={text=>setLocalization(text)}
                        value={localization}
                    />
                </View>

                <TouchableOpacity style={Css.login__button} onPress={()=>sendForm()}>
                    <Text>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}