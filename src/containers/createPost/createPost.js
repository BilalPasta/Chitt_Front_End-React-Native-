import React, { useState } from "react";
import { View, Text, ShadowPropTypesIOS } from "react-native";
import { CreatePostStory } from "./createPostStory";
import axios from "axios";
import { getUserData } from "../../core/asyncStorage";
import { IP4 } from "../../constant";
import database from "@react-native-firebase/database";

export const CreatePost = ({ navigation }) => {
  const [postData, updatePostData] = useState({
    text: "",
    image: "",
    location: undefined,
  });

  const savePost = () => {
    let body = { chit_content: postData.text, timestamp: Date.now() };
    if (postData.location != undefined) {
      // console.log(postData.location.coords)
      body.location = {
        longitude: postData.location.coords.longitude,
        latitude: postData.location.coords.latitude,
      };
    }
    //   let  location=postData.location!=null?{longitude:postData.location.longitute,latitude:postData.location.latitute}:null

    getUserData().then((val) => {
      if (val != undefined) {
        val = JSON.parse(val);
        if (postData.text != "") {
          axios({
            method: "post",
            url: `http://${IP4}:3333/api/v0.0.5/chits`,
            data: body,
            headers: { "X-Authorization": val.token },
          })
            .then((response) => {
              alert("Saved Successfully");
              updatePostData({ ...postData, text: "", location: null });
            })
            .catch((error) => {
              alert(JSON.stringify(error));

              alert(error);
            });
        } else {
          alert("Content should not empty");
        }
      }
    });
  };

  const savePostToFirebase = () => {
    const ref = database().ref("/postList");
    let body = { chit_content: postData.text, timestamp: Date.now() };
    if (postData.location != undefined) {
      // console.log(postData.location.coords)
      body.location = {
        longitude: postData.location.coords.longitude,
        latitude: postData.location.coords.latitude,
      };
    }
    if (postData.text != "") {
      getUserData().then((val) => {
        let userData = JSON.parse(val);
        ref.push({ ...body, email: userData.email }).then(() => {
          navigation.goBack();
        });
      });
    } else {
      alert("Content should not empty");
    }
  };

  const onChange = (name, value) => {
    updatePostData({ ...postData, [name]: value });
    if (name == "location") {
      alert("location added successfully");
    }
  };
  //  const uploadImage=(file)=>{
  //     getUserData().then((val)=>{
  //         if(val!=undefined){
  //             val=JSON.parse(val)
  //     fetch(`http://${IP4}:3333/api/v0.0.5/chits/58/photo`,
  //     {
  //         headers: {
  //         'Accept': '*/*',
  //         'X-Authorization':'5c88a1ffd985bbd48917b08e9b14c73a',
  //         // 'Content-Type':'application/json'
  //     },
  //     method: 'POST',
  //     body:file
  //     }).then((response) => { alert(response.status);})
  // }})
  //  }

  return (
    <CreatePostStory
      // uploadImage={uploadImage}
      postData={postData}
      onChange={onChange}
      savePost={savePost}
      {...navigation}
      savePostToFirebase={savePostToFirebase}
    />
  );
};
