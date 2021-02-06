import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./style";
// let tabbarImages = [
//     require("../../../assets/Dialer.png"),
//     require("../../../assets/Messages.png"),
//     require("../../../assets/CallHistory.png"),
//     require("../../../assets/Contacts.png"),
//     require("../../../assets/Profile.png")

// ]
let TabNames = ["Home", "Search", "Chittr", "Profile"];
export const TabItem = (props) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignSelf: "center" }}
      onPress={() => props.navigation.navigate(props.routeName)}
    >
      {/* {alert(props.routeName)} */}

      {/* <Image
                style={[styles.icon, { tintColor: props.isActive ? "#3164f6" : "#afafaf" }]}
                resizeMode="contain"
                source={tabbarImages[props.index]}
            /> */}
      <Text
        style={{
          textAlign: "center",
          color: props.isActive ? "#c93c3c" : "#afafaf",
        }}
      >
        {TabNames[props.index]}
      </Text>
    </TouchableOpacity>
  );
};
