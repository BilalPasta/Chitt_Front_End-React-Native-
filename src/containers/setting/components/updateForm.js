import React from 'react';
import {View,Text,SafeAreaView,TextInput,TouchableOpacity, ActivityIndicator} from 'react-native';




export const UpdateForm=(props)=> {
    return <View style={{marginHorizontal:10}}>
<View style={{flexDirection:"row",alignItems:"center"}}>
    <Text>First Name
        </Text>
    <TextInput
         onChangeText={(val)=>props.onChange("firstName",val)}

    value={props.userData.firstName}
    style={{height:40,marginVertical:5,backgroundColor:"#fff",flex:1,marginLeft:10,borderRadius:4}}
    />
    </View>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <Text>Last Name
        </Text>
    <TextInput
     value={props.userData.lastName}
     onChangeText={(val)=>props.onChange("lastName",val)}
    style={{height:40,marginVertical:5,backgroundColor:"#fff",flex:1,marginLeft:10,borderRadius:4}}
    />
    </View>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <Text>{`Email         `}    
        </Text>
    <TextInput
         value={props.userData.email}
         onChangeText={(val)=>props.onChange("email",val)}

    style={{height:40,marginVertical:5,backgroundColor:"#fff",flex:1,marginLeft:10,borderRadius:4}}
    />
    </View>
    {/* <View style={{flexDirection:"row",alignItems:"center"}}>
    <Text>{`Password `}
        </Text>
    <TextInput
    secureTextEntry={true}
     value={props.userData.password}
    style={{height:40,marginVertical:5,backgroundColor:"#fff",flex:1,marginLeft:10,borderRadius:4}}
    />
    </View> */}
    {props.updateLoader==false?
    <TouchableOpacity style={{backgroundColor:"#c93c3c",alignSelf:"flex-end",padding:10,marginVertical:10,borderRadius:4}} onPress={()=>props.onUpdateProfile()}>
    <Text style={{color:"#fff"}}>    Update Profile

        </Text>
    </TouchableOpacity>:<View style={{backgroundColor:"#c93c3c",alignSelf:"flex-end",padding:10,marginVertical:10,borderRadius:4,paddingHorizontal:15}}><ActivityIndicator size={"small"} style={{alignSelf:"center"}} color="#fff"/></View>
}

    </View>
}