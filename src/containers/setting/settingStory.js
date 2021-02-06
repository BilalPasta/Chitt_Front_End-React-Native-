import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { UpdateForm } from "./components"
import { TouchableOpacity } from 'react-native-gesture-handler';



export const SettingStory = (props) => <SafeAreaView style={{ flex: 1 }}>
    <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image
            source={require("../../images/user.png")}
        />
        <Text style={{ fontSize: 25 }}>Settings
    </Text>

    </View>
    <UpdateForm {...props} />
    <View style={{flex:1,justifyContent:"flex-end",marginVertical:10}}>
    <TouchableOpacity onPress={()=>props.logout()} style={{backgroundColor:"#c93c3c",alignSelf:"center",paddingVertical:5,paddingHorizontal:8,borderRadius:5}} >
    <Text style={{ fontSize: 18 ,color:"#fff"}}>Logout
    </Text>
        </TouchableOpacity>
        </View>
</SafeAreaView>