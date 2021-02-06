import React, { useState } from "react";
import { View, Text } from "react-native";
import { SignUpStory } from "./signupStory";
import { onChange } from "react-native-reanimated";
import { IP4 } from "../../constant";
import axios from "axios";
import auth from "@react-native-firebase/auth";

export const SignUp = ({ navigation }) => {
  const [signUpForm, updateSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [signupLoaderStatus, updateSignupLoaderStatus] = useState(false);

  const userSignUp = () => {
    let params = {
      given_name: signUpForm.firstName,
      family_name: signUpForm.lastName,
      email: signUpForm.email,
      password: signUpForm.password,
    };
    if (
      signUpForm.firstName.length > 0 &&
      signUpForm.lastName.length > 0 &&
      signUpForm.email.length > 0 &&
      signUpForm.password.length > 0
    ) {
      updateSignupLoaderStatus(true);
      axios({
        method: "post",
        url: `http://${IP4}:3333/api/v0.0.5/user`,
        data: params,
      })
        .then((res) => {
          updateSignupLoaderStatus(false);
          navigation.goBack();
        })
        .catch((err) => {
          updateSignupLoaderStatus(false);

          alert(err);
        });
    } else {
    }
  };

  const firebaseSignUp = () => {
    if (
      signUpForm.firstName.length > 0 &&
      signUpForm.lastName.length > 0 &&
      signUpForm.email.length > 0 &&
      signUpForm.password.length > 0
    ) {
      updateSignupLoaderStatus(true);
      auth()
        .createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
        .then(() => {
          updateSignupLoaderStatus(false);

          console.log("User account created & signed in!");
        })
        .catch((error) => {
          updateSignupLoaderStatus(false);

          if (error.code === "auth/email-already-in-use") {
            alert("That email address is already in use!");
          } else if (error.code === "auth/invalid-email") {
            alert("That email address is invalid!");
          } else {
            alert(error.message);
          }
        });
    } else {
      alert("plz enter complete details");
    }
  };

  const onChange = (name, value) => {
    updateSignUpForm({ ...signUpForm, [name]: value });
  };

  return (
    <SignUpStory
      signupLoaderStatus={signupLoaderStatus}
      onChange={onChange}
      userSignUp={userSignUp}
      firebaseSignUp={firebaseSignUp}
      {...signUpForm}
      {...navigation}
    />
  );
};
