import React, { useState, useEffect } from 'react';
import {View,Text} from 'react-native';
import {SearchStory} from './searchStory'
import axios from "axios";
import {IP4} from "../../constant";
import {getUserData} from '../../core/asyncStorage';

export const Search=()=> {

const [searchText,onChangeSearchText]=useState("");
const [searchLoader,upadteSearchLoader]=useState(false);
const [seachResult,changeSearhResult]=useState([]);
const [followingData,updateFollowing]=useState([]);

const onChange=(value)=>{
    onChangeSearchText(value)

    if(value.length>1){
        upadteSearchLoader(true)
        getUserData().then((val)=>{
            if(val!=undefined){
                val=JSON.parse(val)
        axios({
            method: 'get',
            url: `http://${IP4}:3333/api/v0.0.5/search_user?q=${value}`,
            headers:{"X-Authorization":val.token}
    
        })
        .then( (response) =>{
            console.log(response,"res")
            changeSearhResult(response.data);
            upadteSearchLoader(false)

    
        })
        .catch( (error)=> {
            upadteSearchLoader(false)

            // alert(JSON.stringify(error))
    
            // alert(error);
        });
    }})
    }
    else{
        changeSearhResult([]);
 
    }

}



useEffect(()=>{
    getUserData().then((val)=>{
        if(val!=undefined){
            val=JSON.parse(val);
    axios({
        method: 'get',
        url: `http://${IP4}:3333/api/v0.0.5/user/${val.id}/following`,
        headers:{"X-Authorization":val.token}

    })
    .then( (response) =>{
        console.log(response,"following")
        updateFollowing(response.data)

    })
    .catch( (error)=> {

        // alert(JSON.stringify(error))

        // alert(error);
    });
}})

},[])

const followUser=(id)=>{
    // alert(id)
    getUserData().then((val)=>{
        if(val!=undefined){
            val=JSON.parse(val)
    axios({
        method: 'post',
        url: `http://${IP4}:3333/api/v0.0.5/user/${id}/follow`,
        headers:{"X-Authorization":val.token}

    })
    .then( (response) =>{
        console.log(response,"res")


    })
    .catch( (error)=> {

        // alert(JSON.stringify(error))

        // alert(error);
    });
}})

}

const unFollowUser=(id)=>{
    getUserData().then((val)=>{
        if(val!=undefined){
            val=JSON.parse(val)
    axios({
        method: 'delete',
        url: `http://${IP4}:3333/api/v0.0.5/user/${id}/follow`,
        headers:{"X-Authorization":val.token}

    })
    .then( (response) =>{
        console.log(response,"res")


    })
    .catch( (error)=> {

        // alert(JSON.stringify(error))

        // alert(error);
    });
}})

}
    return <SearchStory
    followUser={followUser}
    followingData={followingData}
    unFollowUser={unFollowUser}
    onChange={onChange}
    searchLoader={searchLoader}
    searchText={searchText}
    seachResult={seachResult}
    updateFollowing={updateFollowing}
    
    />
} 