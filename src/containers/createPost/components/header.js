

import React from 'react';
import {View,Text} from 'react-native';


export const Header=(props)=>{
    return(
        <View style={{height:60,backgroundColor:"#ddd",alignItems:"center",justifyContent:"center"}}>
            <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                Post a Chitt
                </Text>
            </View>
    )
}