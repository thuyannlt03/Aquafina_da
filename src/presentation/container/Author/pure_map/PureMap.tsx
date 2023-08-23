import { Dimensions, StatusBar, StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Header from '../../../component/header/Header'
import { Colors } from '../../../resource/values/colors'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Footer from '../../../component/footer/Footer'
import { BUTTON_BLUE, DAUTIEN, HANOI, HOCHIMINH, LOGO, MAP, MAP_DH, THUONGHIEU } from '../../../../../assets'
import { ButtonLogin } from '../../../component/button/Button'

const PureMap = () => {
    const menu = () => {

    }

    const logOut = () => {

    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent />
            <Header
                leftIcon={
                    <IonIcon name="menu" size={25} color={Colors.BLUE_KV} />
                }
                leftFocus={menu}
                rightIcon={
                    <IonIcon name="log-out-outline" size={25} color={Colors.BLUE_KV} />
                }
                rightFocus={logOut}
            />
            <ScrollView>
                <View style={styles.boxBanner}>


                    <Image source={DAUTIEN} style={styles.imageBottleAquafina} />

                    <Text style={styles.textTitle}>BẢN ĐỒ XANH</Text>
                    <View style={styles.gr}>
                        <Text style={styles.textTitle1}>Địa điểm </Text>
                        <Text style={styles.textTitle2}>đặt</Text>
                    </View>
                    <View>
                        <Image source={LOGO} style={styles.imageTextJoinTheRipple} />

                        <Image source={MAP} style={styles.image} />
                        <View style={styles.boxButton}>
                            <Image source={HANOI} style={styles.HN} />
                        </View>
                        <View style={styles.boxButton}>
                            <Image source={HOCHIMINH} style={styles.HCM} />
                            <View style={styles.Button}>
                              <ButtonLogin
                              backgroundImage={BUTTON_BLUE}
                              titleStyle={styles.titleLogin}
                              title='Khám phá ngay'
                            //onPress={}
                              />
                            </View>

                        </View>

                    </View>



                </View>
                <View style={styles.boxBanner1}>
                    <Text style={styles.textTitle}>ĐỐI TÁC</Text>
                    <Text style={styles.textTitle3}>Aquafina hân hạnh đồng hành cùng các đối tác để </Text>
                    <Text style={styles.textTitle3}> lan tỏa phong cách Xanh.</Text>

                    <Image source={THUONGHIEU} />
                    <Text style={styles.textTitle4}>Địa điểm đặt  “Trạm tái sinh” trên bản đồ </Text>
                    <Image source={MAP_DH} />

                </View>



                <Footer/>

            </ScrollView>
        </View>
    )
}

export default PureMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxBanner: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').height * 0.05,
        backgroundColor: Colors.BG_SCREEN,
    },
    boxBanner1: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').height * 0.05,
        backgroundColor: Colors.WHITE,
    },
    txtBanner: {
        fontSize: 20,
        fontWeight: '300',
        lineHeight: 24,
        color: Colors.BLUE
    },
    footer: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        bottom: 0,
        backgroundColor: Colors.BG_SCREEN,

    },
    imageTextJoinTheRipple: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.4,
        height: Dimensions.get('screen').height * 0.15,
        marginTop: Dimensions.get('screen').height * 0.03,
        marginLeft: '30%'
    },
    imageBottleAquafina: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.6,

    },

    boxButton: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
        padding: Dimensions.get('screen').width * 0.04,
        bottom: Dimensions.get('screen').height * 0.18,
        alignItems: 'center',

    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.7,
        marginTop: '-20%',
    },
    HN: {
        resizeMode: 'contain',
        marginTop: - Dimensions.get('screen').height * 0.18,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.05,
        marginRight: '-43%',

    },
    HCM: {
        resizeMode: 'contain',
        marginTop: Dimensions.get('screen').height * 0.025,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.05,
        marginRight: '-29%',

    },

    boxContent: {
        width: Dimensions.get('screen').width,
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: Colors.BG_CONTENT
    },
    textTitle: {
        width: '100%',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE,
        textAlign: 'center',
    },
    gr: {

        width: Dimensions.get('screen').width * 0.25,
        flexDirection: 'row',

    },
    gr1: {
        marginHorizontal: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get('screen').width * 0.52,
        height: Dimensions.get('screen').height * 0.05,
        backgroundColor: Colors.BLUE_KV,
        margin: Dimensions.get('screen').width * 0.1,
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 8,

    },
    textTitle1: {

        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE,

    },
    textTitle2: {

        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        color: Colors.BLUE,

    },
    textTitle3: {
        width: '100%',
        fontSize: 14,
        fontWeight: '300',
        lineHeight: 24,
        color: Colors.BLUE,
        textAlign: 'center',
    },
    textTitle4: {

        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE_400,

    },
   
    Button:{
        width: Dimensions.get('screen').width*0.5,
        height: Dimensions.get('screen').height * 0.07,
        marginTop: Dimensions.get('screen').height * 0.12, 
        marginLeft: Dimensions.get('screen').width * 0.01,
        
    },
      titleLogin: {
        color: Colors.WHITE,
      },
    txtBT: {
        width: Dimensions.get('screen').width,
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 26.4,
        textAlign: 'center',
        color: Colors.WHITE,
        marginLeft: '-50%',
        marginTop: Dimensions.get('screen').height * 0.005,

    },
})