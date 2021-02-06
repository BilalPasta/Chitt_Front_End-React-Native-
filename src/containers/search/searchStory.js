import React from 'react';
import {View,Text,SafeAreaView,TextInput,FlatList ,TouchableOpacity, ActivityIndicator} from 'react-native';




export const SearchStory=(props)=>  <SafeAreaView style={{flex:1}}>
<View style={{flexDirection:"row",marginHorizontal:5}}>
<TextInput
placeholder={"Search User"}
onChangeText={(val)=>props.onChange(val)}
style={{height:45,flex:0.9,backgroundColor:"#ddd",margin:10,borderRadius:5}}
/>
{props.searchLoader==true?<ActivityIndicator style={{flex:0.1}} size={"small"} color="#c93c3c" />:null}
{/* <TouchableOpacity
style={{alignSelf:"center",height:40,backgroundColor:"#c93c3c",justifyContent:"center",paddingHorizontal:5,borderRadius:5}}
onPress={()=>alert("hjjhg")}>
    <Text style={{alignSelf:"center",color:"#fff"}}>Search
        </Text>
    </TouchableOpacity> */}
    </View>
    {props.seachResult.length>0?
    <FlatList
    data={props.seachResult}
    renderItem={({ item }) =>{ 

    let index=    props.followingData.findIndex((user)=>user.user_id==item.user_id);
   return <View style={{flexDirection:"row",marginVertical:5,borderRadius:10,backgroundColor:"#ddd",padding:10}}>
        <View style={{flex:4}}>
        <Text
        style={{fontSize:16,fontWeight:"bold"}}
>{item.given_name+" "+item.family_name}
    </Text>
    <Text
>{item.email}
    </Text>
    </View>
    {index!=-1?
    <TouchableOpacity
    onPress={()=>{
        followingData=props.followingData;
        followingData.splice(index,1);
        props.updateFollowing([...followingData])

        props.unFollowUser(item.user_id)
    }}
    style={{flex:1,alignSelf:"center",backgroundColor:"#c93c3c",padding:5,borderRadius:5}}>
        <Text style={{textAlign:"center",color:"#fff"}}
>{"Unfollow"}
    </Text>
 
    </TouchableOpacity>
:
    <TouchableOpacity
    onPress={()=>{
        followingData=props.followingData;
        followingData.push(item)
        props.updateFollowing([...followingData])
        props.followUser(item.user_id)
    
    }}
    style={{flex:1,alignSelf:"center",backgroundColor:"#c93c3c",padding:5,borderRadius:5}}>
        <Text style={{textAlign:"center",color:"#fff"}}
>{ "Follow"}
    </Text>
 
    </TouchableOpacity>}
    </View>}}
    style={{flex:1,marginHorizontal:10}}
    keyExtractor={(item) => JSON.stringify(item.user_id) }
    />:
    <View style={{flex:1,alignSelf:"center",justifyContent:"center"}}><Text>Result Not Found
        </Text>
        </View>
}

    </SafeAreaView>