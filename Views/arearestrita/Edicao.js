import React, {useState,useEffect} from 'react';
import {Text, View, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Css } from '../../assets/Css/css';
import config from '../../Backend/config/config.json'
import Fetch from 'react-native-fetch'
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';

export default function Edicao({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');
    const [displayForm, setDisplayForm] = useState('none');
    const [code, setCode] = useState(null);
    const [product, setProduct] = useState(null);
    const [localization, setLocalization] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(()=>{
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
        })();
    });

    //Leitura do código QR
    async function handleBarCodeScanned({ type, data }){
        setScanned(true);
        setDisplayQR('none');
        setDisplayForm('flex');
        setCode(data);
        await getLocation();
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

    //Envia o formulário com os dados para edição
    async function sendForm() {
        let response=await fetch(config.urlRoot+'update',{
        method: 'POST',
        headers:{
                Accept: 'application/json',
            'Content-type':'application/json'
        },
            body: JSON.stringify({
                code: code,
                product: product,
                local: localization
            })
        });
        let json=await response.json();
        setResponse(json);
    }

        //Retorna a posição e endereço do usuário
    async function getLocation()
    {
        let location = await Location.getCurrentPositionAsync({});
        Geocoder.init(config.geocodingAPI);
        Geocoder.from(location.coords.latitude, location.coords.longitude)
            .then(json => {
                let number = json.results[0].address_components[0].short_name;
                let street = json.results[0].address_components[1].short_name;
                setLocalization(`${street} - ${number}`);
            })
            .catch(error => console.warn(error));
    }

        //Nova leitura do QRCode
    async function readAgain()
    {
        setScanned(false);
        setDisplayQR('flex');
        setDisplayForm('none');
        setCode(null);
        setProduct(null);
        setLocalization(null);
    }



    return (
        <View style={[Css.container, Css.containerTop]}>
        <MenuAreaRestrita title='Edição' navigation={navigation} />
        <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : value=>handleBarCodeScanned(value)}
            style={Css.qr__code(displayQR)}
        />
        <View style={Css.qr__form(displayForm)}>
            <Text>{response}</Text>
            <Text style={Css.Text1} > Codigo do Produto:</Text>

            <Text style={Css.sucess__text}>{response}</Text>
            <View style={Css.login__input}>
                <TextInput
                        placeholder='Código do produto:'
                        onChangeText={text=>setProduct(text)}
                        value={product}
                        style={Css.inputBox}
                />
            </View>

            <Text style={Css.Text1} > Localização do Produto:</Text>
            <View style={Css.login__input}>
                <TextInput
                        placeholder='Localização do Produto:'
                        onChangeText={text=>setLocalization(text)}
                        value={localization}
                        style={Css.inputBox}
                />
            </View>

            <TouchableOpacity style={Css.login__button} onPress={()=>sendForm()}>
                <Text>Atualizar</Text>
            </TouchableOpacity>
            {scanned &&
                <View style={Css.login__input}>
                    <Button style={Css.login__button} color={'#000'}
                            title='Escanear Novamente'
                            onPress={()=>readAgain()}
                    />
                </View>
            }
        </View>
    </View>
    );
}