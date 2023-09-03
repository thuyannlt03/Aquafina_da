import { ImageBackground, Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { BUTTON_BLUE, BUTTON_WHITE } from '../../../assets';

export type ButtonLoginProps = {
    title: string;
    titleStyle?: StyleProp<TextStyle>,
    backgroundImage: string;

    onPress?: (screen?: string) => void;
};
export type ButtonRegisterProps = {
    title: string;
    titleStyle?: StyleProp<TextStyle>,
    backgroundImage: string;

    onPress?: (screen?: string) => void;
};


export const ButtonLogin: React.FC<ButtonLoginProps> = (props) => {
    const {  titleStyle, backgroundImage, title, onPress } = props;

    const handlePress = () => {
        onPress && onPress();
    };
    return backgroundImage ? (
        <ImageBackground 
            style={[styles.container]}
            source={BUTTON_BLUE }
        >
            <Pressable onPress={handlePress}>
                <Text style={[styles.styleText, props.titleStyle]}>
                    {title}
                </Text>
            </Pressable>
        </ImageBackground>
    ) : (
        <ImageBackground 
        source={BUTTON_BLUE}
    >
        <Pressable
            onPress={handlePress}
            style={[styles.container]}
        >
            <Text style={[styles.styleText, props.titleStyle]}>
                {title}
            </Text>
        </Pressable>
        </ImageBackground>
    );
    
};
export const ButtonRegister: React.FC<ButtonRegisterProps> = (props) => {
    const {  titleStyle, backgroundImage, title, onPress } = props;

    const handlePress = () => {
        onPress && onPress();
    };
    return backgroundImage ? (
        <ImageBackground 
            style={[styles.container]}
            source={BUTTON_WHITE}
        >
            <Pressable onPress={handlePress}>
                <Text style={[styles.styleText, props.titleStyle]}>
                    {title}
                </Text>
            </Pressable>
        </ImageBackground>
    ) : (
        <ImageBackground 
        source={BUTTON_WHITE}
    >
        <Pressable
            onPress={handlePress}
            style={[styles.container]}
        >
            <Text style={[styles.styleText, props.titleStyle]}>
                {title}
            </Text>
        </Pressable>
        </ImageBackground>
    );
    
};


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        resizeMode: "cover",
        overflow: "hidden",
        flexShrink: 0
    },
    styleText: {
        fontFamily: 'SVN-Gotham',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16.8
    }
})



// import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, StyleProp, TextStyle, ViewStyle, Dimensions } from 'react-native'
// import React from 'react'
// import { Colors } from '../../resources/values/colors';

// interface ButtonProps {
//     containerStyle: StyleProp<ViewStyle>,
//     titleStyle?: StyleProp<TextStyle>,
//     title?: string,
//     onPress?: () => void;
// }

// const Button: React.FC<ButtonProps> = (props) => {

//     const { containerStyle, titleStyle, title, onPress } = props;

//     return (
//         <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
//             <Text style={[styles.title, titleStyle]}>{title}</Text>
//         </TouchableOpacity>
//     )
// }

// export default Button

// const styles = StyleSheet.create({
//     button: {
//         width: "100%",
//         height: Dimensions.get('screen').height * 0.06,
//         alignItems: "center",
//         justifyContent: "center",
//         borderRadius: 8,
//     },
//     title: {
//         fontSize: 14,
//         fontWeight: '500',
//         lineHeight: 16.8,
//     },
// })