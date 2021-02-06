import React from 'react';

import {View,Text, Image,TouchableOpacity} from 'react-native';

 
export const UserInfo=(props)=>{
    return(
    <View ><View style={{flexDirection:"row",height:140}}>
       
       <View style={{flex:1}}>
            <Image 
            style={{flex:1,width:null,height:null}}
            resizeMode="contain"
            source={require("../../../images/user.png")} />
       </View>
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <View style={{flex:1,justifyContent:"center"}}><Text>UserName
                </Text>
                </View>
                <View style={{flex:1,justifyContent:"center"}}><Text>{props.userProfileData.given_name}
                </Text>
                </View>

                <TouchableOpacity onPress={()=>props.navigate("SettingScreen",{...props.userProfileData})} style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                   
                   <Image source={require("../../../images/settings.png")}/>
                    <Text style={{fontWeight:"bold",marginHorizontal:3}}>User Settings
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* <View style={{marginHorizontal:10,marginVertical:13}}>
            <Text style={{fontSize:16}}>Information
                </Text>
                <Text style={{fontSize:14,fontWeight:"bold"}}>adcsd cndskjcndisbcn kjsndkcjnbdksj kjsdncjkdnkscn kjndklsjcnd 
                    </Text>
            </View> */}
        </View>)
}
