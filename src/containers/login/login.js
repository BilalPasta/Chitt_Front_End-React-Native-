import React, { useState } from "react";
import { View, Text } from "react-native";
import { LoginStory } from "./loginStory";
import axios from "axios";
import { storeUserData } from "../../core/asyncStorage";
import { NetworkInfo } from "react-native-network-info";
import { IP4 } from "../../constant";
import auth from "@react-native-firebase/auth";

export const Login = ({ navigation }) => {
  const [loginForm, updateLoginForm] = useState({
    email: "",
    password: "",
  });
  const [loginLoaderStatus, updateLoaderStatus] = useState(false);

  const firebaseSignIn = () => {
    if (loginForm.email.length > 0 && loginForm.password.length > 0) {
      updateLoaderStatus(true);

      auth()
        .signInWithEmailAndPassword(loginForm.email, loginForm.password)
        .then(() => {
          updateLoaderStatus(false);
          navigation.navigate("Home");

          console.log("User account created & signed in!");
        })
        .catch((error) => {
          updateLoaderStatus(false);

          if (error.code === "auth/email-already-in-use") {
            alert("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            alert("That email address is invalid!");
          } else {
            alert(error.message);
          }
        });
    } else {
      alert("please enter email and password");
    }
  };
  const userLogin = () => {
    if (loginForm.email.length > 0 && loginForm.password.length > 0) {
      updateLoaderStatus(true);
      NetworkInfo.getIPAddress().then((ipAddress) => {
        // alert(ipAddress);
        axios({
          method: "post",
          url: `http://${IP4}:3333/api/v0.0.5/login`,
          data: loginForm,
        })
          .then((response) => {
            // alert(response);
            updateLoaderStatus(false);
            storeUserData(JSON.stringify(response.data));

            navigation.navigate("Home");
          })
          .catch(function(error) {
            updateLoaderStatus(false);

            alert(error);
          });
      });
    } else {
      alert("please enter email and password");
    }
  };

  const onChange = (name, value) => {
    updateLoginForm({ ...loginForm, [name]: value });
  };

  return (
    <LoginStory
      onChange={onChange}
      userLogin={userLogin}
      loginLoaderStatus={loginLoaderStatus}
      {...navigation}
      {...loginForm}
      firebaseSignIn={firebaseSignIn}
    />
  );
};
