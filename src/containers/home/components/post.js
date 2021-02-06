import React from "react";
import { View, Text } from "react-native";

export const Post = (props) => {
  return (
    <View
      style={{
        borderBottomWidth: 0.9,
        borderColor: "#ddd",
        paddingBottom: 5,
      }}
    >
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <View
          style={{
            backgroundColor: "#c93c3c",
            height: 40,
            width: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>{props.user.given_name}</Text> */}
          {props.email ? (
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              {props.email[0].toUpperCase()}
            </Text>
          ) : null}
        </View>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 14,
            fontSize: 14,
            marginLeft: 4,
          }}
        >
          {props.chit_content}
        </Text>
      </View>
      {props.location != undefined && props.location != null ? (
        <View
          style={{
            alignSelf: "flex-end",
            backgroundColor: "#ddd",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>
            {`Location: long(${props.location.longitude}) lat(${
              props.location.longitude
            })`}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
