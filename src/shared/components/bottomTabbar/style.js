import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window")
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        backgroundColor: "#fff",
        height: normalize(50),
        borderTopWidth: normalize(1) ,
        borderTopColor: "rgb(220,220,220)",
        width: width
    },
    icon: {
        width: normalize(24),
        height: normalize(24),
        alignSelf: "center",
        flex: 1
    },
    hide:{
        height: normalize(51),
        // borderTopWidth: 1,
        borderTopColor: "rgb(220,220,220)",
        width: width,
        backgroundColor:"#000"
    }
})