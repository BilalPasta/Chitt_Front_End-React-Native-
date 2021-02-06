import { Easing, Animated } from 'react-native'


/**
* @name AnimatedNavigation
* @desc For right-left animation 
*/







export class AnimatedNavigation {

    //For right-left animation START
    static transitionConfiguration() {
        return () => ({
            // transitionSpec: {
            //     duration: 300,
            //     easing: Easing.out(Easing.poly(4)),
            //     timing: Animated.timing,
            // },
            screenInterpolator: sceneProps => {
                const {
                    layout,
                    position,
                    scene: {
                        route: {
                            params: {
                                transition
                            } = {}
                        } = {},
                        ...scene
                    }
                } = sceneProps;
                const { index } = scene;
                const width = layout.initWidth;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [width, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });
                return transition && 1 == 'none' ? null : { opacity, transform: [{ translateX: translateX }] };
            },
        });

        //For right-left animation END
    }

}

