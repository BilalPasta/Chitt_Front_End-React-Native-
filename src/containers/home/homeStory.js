import React from 'react';
import { View, Text, SafeAreaView, FlatList, ShadowPropTypesIOS, ActivityIndicator } from 'react-native';
import { Header, Post } from './components'




export const HomeStory = (props) => <SafeAreaView style={{flex:1}}>
    <Header {...props} />
{props.loader!=true?props.postList.length>0?
    <FlatList
        style={{ width: "95%", alignSelf: "center" }}
        data={props.postList}
        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => <Post
            {...item}
        />}
        keyExtractor={(item) => JSON.stringify(item.chit_id) }

    />:<View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>No Chitts Available
    </Text>
    </View> :<View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator color="red" style={{alignSelf:"center"}} size={"large"} />
        </View>
}
    
</SafeAreaView>



 