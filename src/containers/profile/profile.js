import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { ProfileStory } from "./profileStory";
import { getUserData } from "../../core/asyncStorage";
import { IP4 } from "../../constant";
export const Profile = ({ navigation }) => {
  const [userProfileData, updateUserProfileData] = useState(null);
  const [getProfileDataLoader, updateLoader] = useState(false);
  const [quickPostText, ChangeQuickPostText] = useState("");
  useEffect(() => {
    getUserData().then((val) => {
      if (val != undefined) {
        val = JSON.parse(val);
        axios({
          method: "get",
          url: `http://${IP4}:3333/api/v0.0.5/user/${val.id}`,
        })
          .then((res) => {
            console.log(res, "res");
            updateUserProfileData(res.data);
            updateLoader(false);
          })
          .catch((err) => {
            updateLoader(false);

            alert(err);
          });
      }
    });
  }, []);

  const savePost = () => {
    getUserData().then((val) => {
      if (val != undefined) {
        val = JSON.parse(val);
        axios({
          method: "post",
          url: `http://${IP4}:3333/api/v0.0.5/chits`,
          data: { chit_content: quickPostText, timestamp: Date.now() },
          headers: { "X-Authorization": val.token },
        })
          .then((response) => {
            // alert(response);

            alert("Saved Successfully");
            ChangeQuickPostText("");
          })
          .catch((error) => {
            alert(JSON.stringify(error));

            alert(error);
          });
      }
    });
  };

  return (
    <ProfileStory
      quickPostText={quickPostText}
      savePost={savePost}
      ChangeQuickPostText={ChangeQuickPostText}
      getProfileDataLoader={getProfileDataLoader}
      userProfileData={userProfileData}
      {...navigation}
    />
  );
};
