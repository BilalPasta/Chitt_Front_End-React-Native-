import React from 'react';
import {View,Text,TextInput,Image,TouchableOpacity} from 'react-native'

export const IconButton=(props)=>{
    return <TouchableOpacity 
    onPress={props.onPress} style={{flexDirection:"row",marginVertical:10}}>
        <Image source={require("../../../images/plus.png")}
        style={{width:25,height:25}}
        resizeMode="contain"/>
        <Text style={{alignSelf:"center",marginHorizontal:10}}>{props.text}
            </Text>
        </TouchableOpacity>
}