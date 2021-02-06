import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import { styles } from "./signup.style";
// import {  } from 'react-native-gesture-handler';

export const SignUpStory = (props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.logo}>
      <Image
        source={require("../../images/logo.png")}
        style={{ flex: 1 }}
        resizeMode="contain"
      />
    </View>
    <View style={styles.mainBody}>
      <View style={styles.row}>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            First Name
          </Text>
        </View>
        <View style={{ flex: 3 }}>
          <TextInput
            onChangeText={(value) => props.onChange("firstName", value)}
            value={props.firstName}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Last Name
          </Text>
        </View>
        <View style={{ flex: 3 }}>
          <TextInput
            value={props.lastName}
            onChangeText={(value) => props.onChange("lastName", value)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Email
          </Text>
        </View>
        <View style={{ flex: 3 }}>
          <TextInput
            value={props.email}
            onChangeText={(value) => props.onChange("email", value)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Password
          </Text>
        </View>
        <View style={{ flex: 3 }}>
          <TextInput
            secureTextEntry={true}
            value={props.password}
            onChangeText={(value) => props.onChange("password", value)}
            style={styles.input}
          />
        </View>
      </View>

      {props.signupLoaderStatus == true ? (
        <View style={styles.signUpButton}>
          <ActivityIndicator color="#fff" />
        </View>
      ) : (
        <TouchableOpacity
          style={styles.signUpButton}
          //   onPress={() => props.userSignUp()}
          onPress={() => props.firebaseSignUp()}
        >
          <Text style={styles.signUpButtonText}>SignUp</Text>
        </TouchableOpacity>
      )}
    </View>
    {/* <TouchableOpacity onPress={()=>props.navigate("SignUpScreen")}>
<Text>go to signUp</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>props.navigate("Home")}>
<Text>go to Home</Text>
    </TouchableOpacity> */}
  </SafeAreaView>
);
