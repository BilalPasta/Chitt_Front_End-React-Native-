import React from 'react';
import {View,Text,SafeAreaView,ActivityIndicator} from 'react-native';
import {UserInfo,QuickPost,RecentPost} from "./components"



export const ProfileStory=(props)=>  <SafeAreaView style={{flex:1}}>
    {props.getProfileDataLoader==true&&props.userProfileData==null?<ActivityIndicator style={{flex:1,alignSelf:"center"}} color="red" size={"large"} />:<View style={{flex:1}}>
    <UserInfo {...props} />
    <View style={{flex:1,marginTop:40}}>
    <QuickPost {...props}/>
<RecentPost {...props}/>
        </View>
        </View>}
    
</SafeAreaView>