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
        // height: normalize(40), 
        // paddingVertical:0,
        // backgroundColor:"#fff",
        // borderRadius: normalize(3),
        // borderWidth:2,
        // borderColor:"#bbb"
        height:40,marginVertical:5,backgroundColor:"#fff",marginLeft:10,borderRadius:4
    },
    loginButton: {
    padding: normalize(10),
        paddingHorizontal: normalize(30),
        borderRadius: normalize(3),
        backgroundColor: "#c93c3c",
        alignSelf: "center",
        marginHorizontal: normalize(10),
        marginVertical: normalize(10),
        borderRadius:5


    },
    signUpButtonText:{
     color:"blue",
     textDecorationColor:"blue",
     textDecorationLine: 'underline',

    },
    loginButtonText:{
        color:"#fff"

    },
    signUpButton: {
        padding: normalize(10),
        paddingHorizontal: normalize(30),
        borderRadius: normalize(3),
        alignSelf: "center",
        marginHorizontal: normalize(10),
        marginVertical: normalize(10),
        
    }
})