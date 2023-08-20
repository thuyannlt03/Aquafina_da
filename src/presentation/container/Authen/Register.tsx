import { StatusBar, Dimensions, ScrollView, Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/header/Header'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { Colors } from '../../resource/values/colors'
import { BUTTON_WHITE, IMAGE_FOOTER_AUTHEN, IMAGE_TEXT_WELLCOME } from '../../../../assets'
import {RegisterField } from '../../component/textfield/TextField'
import {ButtonRegister} from '../../component/button/Button'
import { AuthenStackScreenProps } from '../../navigaton/stack/AuthenNavigation'

const Register: React.FC<AuthenStackScreenProps<'Register'>> = ({ navigation, route }) => {

    const [phone, setPhone] = useState('');

    const goHome = () => {

    };

    const register = () => {
        navigation.navigate('RegisterOTP', {
            phone: phone
        })
    };

    return (
        <ScrollView>
            <StatusBar barStyle={'light-content'} translucent />
            <View style={styles.container}>
                <Header
                    leftIcon={
                        <FoundationIcon name="home" size={30} color={Colors.GRAY_5} />
                    }
                    leftFocus={goHome}
                />
                <View style={styles.viewImge}>
                    <Image source={{ uri: IMAGE_TEXT_WELLCOME }} style={styles.imgWellcome} />
                </View>
                <Text style={styles.txtLogin}>ĐĂNG KÝ</Text>
                <RegisterField
               inputProps_1={{
              
              }}
              
                title='Số điện thoại'
                placeholder='Nhập số điện thoại của bạn'
                inputProps_2={{
                    onChangeText: (text) => { setPhone(text) }
                }}
                
               />
              
                <View style={styles.footer}>
                    <Image source={{ uri: IMAGE_FOOTER_AUTHEN }} style={styles.imgFooter} />
                    <View style={styles.boxButton}>
                    <View style={styles.Button}>
                        <ButtonRegister
                           backgroundImage={BUTTON_WHITE}
                           titleStyle={styles.titleRegister}
                           title='Đăng kí'
                            onPress={register}
                        />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        height: Dimensions.get('screen').height
    },
    viewImge: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgWellcome: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.15,
        marginTop: Dimensions.get('screen').height * 0.1
    },
    txtLogin: {
        width: Dimensions.get('screen').width,
        fontSize: 22,
        fontWeight: '900',
        lineHeight: 26.4,
        textAlign: 'center',
        color: Colors.BLUE_500,
        marginTop: Dimensions.get('screen').height * 0.08,
       
    },
    footer: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        bottom: 0,
    },
    imgFooter: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.42,

    },
    boxButton: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
        padding: Dimensions.get('screen').width * 0.04,
        bottom: Dimensions.get('screen').height * 0.05,
        alignItems: 'center'
    },
    Button:{
        marginTop:Dimensions.get('screen').height * 0.05,
        width: Dimensions.get('screen').width*1,
        height: Dimensions.get('screen').height * 0.07,
       
    },
    btnLogin: {
        backgroundColor: Colors.BLUE_500,
    },
    titleLogin: {
        color: Colors.WHITE,
    },
    txtOr: {
        textAlign: 'center',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.GRAY_5,
        marginVertical: Dimensions.get('screen').height * 0.01,
    },
    btnRegister: {
        backgroundColor: Colors.GRAY_1,
    },
    titleRegister: {
        color: Colors.BLUE_KV,
    }
})