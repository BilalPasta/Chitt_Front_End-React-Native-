import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./createPost.style";
import { Header, TextArea, IconButton } from "./components";
import ImagePicker from "react-native-image-crop-picker";
import Geolocation from "@react-native-community/geolocation";

export const CreatePostStory = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <TextArea {...props} />
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        {/* <IconButton
                text="Add a Photo or Video"
                // onPress={() => ImagePicker.openPicker({
                //     width: 300,
                //     height: 400,
                // }).then(image => {
                //     props.uploadImage(image)
                //     console.log(image);
                // }).catch(error => {
                //     // add this to your code
                // })}
            /> */}

        <IconButton
          text="Add Location"
          onPress={() =>
            Geolocation.getCurrentPosition((info) =>
              props.onChange("location", info)
            )
          }
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 10,
            right: 0,
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: "#c93c3c",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
          onPress={() => props.savePostToFirebase()}
        >
          <Image
            source={require("../../images/add.png")}
            style={{
              width: 24,
              height: 24,
              alignSelf: "center",
              tintColor: "#fff",
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
