import { StatusBar, Dimensions, ScrollView, Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/header/Header'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { Colors } from '../../resource/values/colors'
import { BUTTON_BLUE, BUTTON_WHITE, IMAGE_FOOTER_AUTHEN, IMAGE_TEXT_WELLCOME } from '../../../../assets'

import {ButtonLogin} from '../../component/button/Button'
import { AuthenStackScreenProps } from '../../navigation/stack/AuthenNavigation'

const RegisterSuccess : React.FC<AuthenStackScreenProps<'RegisterSuccess'>> = ({ navigation, route }) => {

    const [phone, setPhone] = useState('');

    const goHome = () => {

    };

    const Login = () => {
        navigation.navigate('LogIn')
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
        <Text style={styles.txtLogin}>ĐĂNG KÝ THÀNH CÔNG</Text>
        <Text style={styles.des}>Vui lòng đăng nhập để bắt đầu chương trình</Text>
        <View style={styles.footer}>
                    <Image source={{ uri: IMAGE_FOOTER_AUTHEN }} style={styles.imgFooter} />
                    <View style={styles.boxButton}>
                    <View style={styles.Button}>
                        <ButtonLogin
                           backgroundImage={BUTTON_BLUE}
                           titleStyle={styles.titleLogin}
                           title='Đăng nhập'
                            onPress={Login}
                        />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
  )
}

export default RegisterSuccess

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
        height: Dimensions.get('screen').height * 0.45,

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
    des: {
        textAlign: 'center',
        width: '100%',
        color: Colors.GRAY_5,
        fontSize: 14,
        lineHeight: 36,
        marginBottom: '5%',
        fontWeight: '400'
    },
})