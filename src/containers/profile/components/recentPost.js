import React from 'react';

import { View, Text, Image, TouchableOpacity, TextInput,FlatList } from 'react-native';

export const RecentPost = (props) => {
    return (<View style={{ margin: 10,flex:1 }}>
        <Text style={{paddingVertical:10}}>Recent posts you've posted
            </Text>
{            props.userProfileData.recent_chits.length>0?(<FlatList
        style={{flex:1}}
        // style={{ width: "95%", alignSelf: "center" }}
        data={props.userProfileData.recent_chits}
        showsVerticalScrollIndicator={false}
horizontal={true}

        renderItem={({ item }) => <View style={{flex:0.6,backgroundColor:"#ddd",alignSelf:"center",margin:10,height:120,width:250,borderRadius:5}}>
            <Text style={{padding:5,flex:1}}>{item.chit_content}</Text> 
            <View style={{backgroundColor:"#c93c3c"}}>

                {item.location&&item.location!=undefined&&item.location!=null?
                            <Text style={{padding:2,alignSelf:"center",color:"#fff"}}>{`long(${item.location.longitude}) lat(${item.location.longitude})`}</Text> 
:null
                }
           </View>
            </View>}
        keyExtractor={(item) => JSON.stringify(item.chit_id) }

        />):<View style={{flex:1,justifyContent:"center"}}>
        <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center"}}>No Post Available
                </Text>
            </View>
}        
    </View>)
}
