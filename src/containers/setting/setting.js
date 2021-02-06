import React, { useState } from 'react';
import {View,Text} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"
import {SettingStory} from "./settingStory"
import {getUserData} from "../../core/asyncStorage";
import axios from "axios";
import {IP4} from "../../constant"
export const Setting=({navigation})=> {
    let { state: { params } } = navigation;
console.log(params)
const [userData,updateUserData]=useState({
    userId:params.user_id!=undefined?params.user_id:"",
    firstName:params.given_name!=undefined?params.given_name:"",
    lastName:params.family_name!=undefined?params.family_name:"",
    email:params.email!=undefined?params.email:"",
    
})

const [updateLoader,changeUpdateLoader]=useState(false);

const onChange=(name,value)=>{

    updateUserData({...userData,[name]:value})

 }


 const onUpdateProfile=()=>{
    changeUpdateLoader(true)
    getUserData().then((val)=>{
        if(val!=undefined){
            val=JSON.parse(val)
            console.log(val.id,val.token)
        //     axios({
        //         method: 'patch',
        //         url: `http://${IP4}:3333/api/v0.0.5/user${val.id}`,
        //         data:{given_name:userData.firstName,family_name:userData.lastName,email:userData.email},
        //         headers:{"X-Authorization":val.token}

        //     })
        //     .then( (response) =>{
        //         changeUpdateLoader(false)
        // alert("Data Update Successfully")
        
        //     })
        //     .catch(function (error) {
        //         changeUpdateLoader(false)
        
        //         alert(error);
        //     });


//         fetch(`http://${IP4}:3333/api/v0.0.5/user${val.id}`, {
//   method: 'PATCH',
//   headers: {
//     Accept: 'application/json',
//     "X-Authorization":val.token
//   },
//   body: JSON.stringify({family_name:"bbbbb"}),
// }).then((res)=>{
//     console.log(res)
// })

fetch(`http://${IP4}:3333/api/v0.0.5/user/${userData.userId}`,
        {
            headers: {
            'Accept': '*/*',
            'X-Authorization':val.token,
            'Content-Type':'application/json'
        },
        method: 'PATCH',
        body:JSON.stringify({family_name:userData.lastName,given_name:userData.firstName,email:userData.email})
        }).then((response) => {                 changeUpdateLoader(false)
            alert("Profile Updated")
        })


        }   

    })
 }
 const logout=()=>{
    AsyncStorage.clear();
    navigation.navigate("LoginScreen")

 }

    return<SettingStory 
    onUpdateProfile={onUpdateProfile}
    updateLoader={updateLoader}
    userData={userData}
    logout={logout}
    onChange={onChange}
    {...navigation}/>
} 