import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    },
    mainBody: {
        flex: 0.6
    },
    row: {
        flexDirection: "row",
        padding: normalize(3),
        marginVertical: normalize(10),
        // backgroundColor: "red",
        marginHorizontal: normalize(10)
    },
    input: {
        // height: normalize(30), 
        // borderRadius: normalize(3),
        // paddingVertical:0,
        // borderWidth:2,
        // borderColor:"#bbb"
        height:40,marginVertical:5,backgroundColor:"#fff",marginLeft:10,borderRadius:4

    },
    signUpButton: {
        padding: normalize(10),
        paddingHorizontal: normalize(30),
        borderRadius: normalize(3),
        backgroundColor: "#c93c3c",
        alignSelf: "center",
        marginHorizontal: normalize(10),
        marginVertical: normalize(15),
        borderRadius:5


    },
    signUpButtonText:{
     color:"#fff",
    //  textDecorationColor:"blue",
    //  textDecorationLine: 'underline',

    },
   
   
})