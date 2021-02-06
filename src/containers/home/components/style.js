import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
 
export  const styles=StyleSheet.create({
    row:{
        height:normalize(60),
        paddingVertical:5,
        paddingHorizontal:5,
        backgroundColor:"red",
        flexDirection:"row",
        backgroundColor:"#ddd"
    }
})