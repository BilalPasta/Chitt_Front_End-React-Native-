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
import { styles } from "./login.style";
// import {  } from 'react-native-gesture-handler';

export const LoginStory = (props) => (
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
                   Email
                 </Text>
               </View>
               <View style={{ flex: 3 }}>
                 <TextInput
                   value={props.email}
                   onChangeText={(value) =>
                     props.onChange("email", value)
                   }
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
                   value={props.password}
                   secureTextEntry={true}
                   onChangeText={(value) =>
                     props.onChange("password", value)
                   }
                   style={styles.input}
                 />
               </View>
             </View>
             {props.loginLoaderStatus == true ? (
               <View style={styles.loginButton}>
                 <ActivityIndicator color="#fff" />
               </View>
             ) : (
               <TouchableOpacity
                 style={styles.loginButton}
                 // onPress={()=>props.userLogin()}
                 onPress={() => props.firebaseSignIn()}
               >
                 <Text style={styles.loginButtonText}>Login</Text>
               </TouchableOpacity>
             )}

             <View />

             <TouchableOpacity
               style={styles.signUpButton}
               onPress={() => props.navigate("SignUpScreen")}
             >
               <Text style={styles.signUpButtonText}>
                 Haven't joined CHITTR? Register Here
               </Text>
             </TouchableOpacity>
           </View>
           {/* <TouchableOpacity onPress={()=>props.navigate("SignUpScreen")}>
<Text>go to signUp</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>props.navigate("Home")}>
<Text>go to Home</Text>
    </TouchableOpacity> */}
         </SafeAreaView>
       );
