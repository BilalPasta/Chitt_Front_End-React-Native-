import React from 'react';
import {View,Text,TextInput} from 'react-native'

export const TextArea=(props)=>{

    return <View >
        <Text style={{fontSize:15,marginVertical:10}}>Write your Chitt here:
            </Text>
            <TextInput
            maxLength={141}
            onChangeText={(value)=>props.onChange("text",value)}
            value={props.postData.text}
            multiline={true}
            style={{height:170,borderWidth:2,borderColor:"#ddd",textAlignVertical:"top"}}
            />
        </View>
}