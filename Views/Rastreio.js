import React from 'react';
import {View, Text, Button} from 'react-native';


export default function Rastreio( { navigation } )
{
    return (
     <View>
         <Text> Rastreio </Text>
         <Button title ="Home" onPress={() => navigation.navigate('Home')}/>
     </View>
    );
}