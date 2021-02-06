import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {styles} from './style';


export  const Header=(props)=>{
return <View style={styles.row}>
    <TouchableOpacity style={{width:60,borderRadius:30,justifyContent:"center",alignItems:"center",borderWidth:2,borderColor:"#eee"}}
    onPress={()=>props.navigate("CreatePostScreen")} >
        <Text style={{fontSize:20,fontWeight:"bold",}}>P</Text>
        </TouchableOpacity>
        <View style={{flex:1,alignSelf:"center"}}><Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>CHITTR
            </Text>
        </View >
        <View style={{width:40,alignSelf:"center"}}>
        <Image
        source={require("../../../images/logo.png")}
        style={{width:40,height:40}}
        resizeMode="contain"
        />    
               </View>
    </View>
}