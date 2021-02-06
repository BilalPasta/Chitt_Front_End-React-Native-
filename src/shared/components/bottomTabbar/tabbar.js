import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import { TabItem } from './tabItem';
import { styles } from './style'
export const Tabbar = (props) => {
    console.log(props, "props")
    const { state, navigation, position } = props
    console.log(props)
    const { index } = navigation.state;


    return (
        <View style={styles.row}>
            {props.navigation.state.routes.map((obj, i) => {

                return (<TabItem
                    key={i}
                    {...obj}
                    index={i}
                    navigation={navigation}
                    isActive={index === i}

                />)
            })}

        </View>
    )


}