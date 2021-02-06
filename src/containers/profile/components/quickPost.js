import React from 'react';

import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';


export const QuickPost = (props) => {
    return (<View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 16, marginVertical: 5 }}>
            Write a quick post</Text>
        <TextInput
        maxLength={141}
        value={props.quickPostText}
        onChangeText={(value)=>props.ChangeQuickPostText(value)}
            style={{ height: 40, backgroundColor: "#fff" }}
        />
        <TouchableOpacity style={{ backgroundColor: "#c93c3c", alignSelf: "flex-end", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 3, marginTop: 10 }} onPress={() => props.savePost()}>
            <Text style={{ fontSize: 16, marginVertical: 5, color: "#fff" }}>
                Post</Text>
        </TouchableOpacity>
    </View>)
}
