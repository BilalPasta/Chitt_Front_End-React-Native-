import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { HomeStory } from "./homeStory";
import axios from "axios";
import { getUserData } from "../../core/asyncStorage/index";
import database from "@react-native-firebase/database";

import { IP4 } from "../../constant";

export class Home extends React.Component {
  unsubscribe = null;
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      loader: false,
    };
  }
  componentDidMount() {
    database()
      .ref("postList")
      .on("child_added", (snapshot) => {
        let copyData = this.state.postList;
        copyData.push(snapshot.val());
        this.setState({ postList: [...copyData], loader: false });
      });
  }

  // componentDidMount(){
  //      this.unsubscribe = this.props.navigation.addListener('willFocus', () => {
  //         getUserData().then((val)=>{
  //             if(val!=undefined){
  //                 val=JSON.parse(val)
  //                 axios({
  //                     method: 'get',
  //                     url: `http://${IP4}:3333/api/v0.0.5/chits`,
  //                     headers:{"X-Authorization":val.token}
  //                 })
  //                 .then( (response) =>{
  //                     this.setState({postList:response.data,loader:false})

  //                 })
  //                 .catch(function (error) {
  //                     this.setState({loader:false})

  //                     alert(error);
  //                 });

  //             }

  //         })        // The screen is focused
  //         // Call any action
  //       });

  //     getUserData().then((val)=>{
  //         if(val!=undefined){
  //             val=JSON.parse(val)
  //             axios({
  //                 method: 'get',
  //                 url: `http://${IP4}:3333/api/v0.0.5/chits`,
  //                 headers:{"X-Authorization":val.token}
  //             })
  //             .then( (response) =>{
  //                 this.setState({postList:response.data,loader:false})

  //             })
  //             .catch(function (error) {
  //                 this.setState({loader:false})

  //                 alert(error);
  //             });

  //         }

  //     })

  //     //   return unsubscribe;

  // }
  // componentWillUnmount(){
  //     this.unsubscribe=null
  // }

  render() {
    return <HomeStory {...this.state} {...this.props.navigation} />;
  }
}
