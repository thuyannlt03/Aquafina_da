import { Dimensions, StatusBar, StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Header from '../../../component/header/Header'
import { Colors } from '../../../resource/values/colors'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Footer from '../../../component/footer/Footer'
import Swiper from 'react-native-swiper'
import { BANNER1, BANNER2, BANNER3, BANNER4, BUTTON_BLUE, BXH, LOGO, MAP, PUREGIFT, QUAN7 } from '../../../../../assets'
import { ButtonLogin } from '../../../component/button/Button'

const Home = () => {
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
            <Swiper style={styles.swiper}
                autoplayTimeout={3}
                autoplay
                loop
                paginationStyle={styles.pagination}
            >
                <View style={styles.boxButton}>
                    <View style={styles.swiperSilde}>
                        <Image source={BANNER1} style={styles.image} />
                        <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                titleStyle={styles.titleLogin}
                                title='Tìm hiểu thêm'
                            //onPress={}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.boxButton}>
                    <View style={styles.swiperSilde}>
                        <Image source={BANNER2} style={styles.image} />
                        <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                titleStyle={styles.titleLogin}
                                title='Tìm hiểu thêm'
                            //onPress={}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.boxButton}>
                    <View style={styles.swiperSilde}>
                        <Image source={BANNER3} style={styles.image} />
                        <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                titleStyle={styles.titleLogin}
                                title='Tìm hiểu thêm'
                            //onPress={}
                            />
                        </View>
                    </View>
                </View>


                <View style={styles.boxButton}>
                    <View style={styles.swiperSilde}>
                        <Image source={BANNER4} style={styles.image} />
                        <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                titleStyle={styles.titleLogin}
                                title='Tìm hiểu thêm'
                            //onPress={}
                            />
                        </View>
                    </View>
                </View>
             
            </Swiper>

                <Image source={BXH} style={styles.imageBXH}/>
                <Image source={PUREGIFT} style={styles.imagegift}/>
                <View>
                       

                        <Image source={MAP} style={styles.imageM} />
                        <View style={styles.boxButton}>
                            <Image source={QUAN7} style={styles.HN} />
                        </View>
                      
                            <View style={styles.Button1}>
                              <ButtonLogin
                              backgroundImage={BUTTON_BLUE}
                              titleStyle={styles.titleLogin}
                              title='Khám phá ngay'
                            //onPress={}
                              />
                            </View>

                       

                    </View>
                    <Footer/>
            </ScrollView>
        
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    imageM: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.7,
        marginTop: - Dimensions.get('screen').height * 0.2,
        
    },
    HN: {
        resizeMode: 'contain',
        marginTop: - Dimensions.get('screen').height * 0.08,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.05,
        marginRight: '-43%',

    },

    boxButton: {
       
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
        padding: Dimensions.get('screen').width * 0.04,
        bottom: Dimensions.get('screen').height * 0.18,
        alignItems: 'center',

    },
    Button1: {
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.07,
        marginTop:- Dimensions.get('screen').height * 0.16,
        marginLeft: Dimensions.get('screen').width * 0.2,

    },

    Button: {
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.07,
        marginTop:- Dimensions.get('screen').height * 0.15,
        marginLeft:- Dimensions.get('screen').width * 0.03,

    },
    titleLogin: {
        color: Colors.WHITE,
    },
    pagination: {
        marginBottom: Dimensions.get('screen').height * 0.3
    },
    swiperSilde: {
        width: Dimensions.get('screen').width * 0.9,
        marginStart: Dimensions.get('screen').width * 0.05,
        alignItems: 'center',

    },
    imagegift: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 1,
        height: Dimensions.get('screen').height * 1.3,
        marginTop: - Dimensions.get('screen').height * 0.36,
        marginBottom: - Dimensions.get('screen').height * 0.2,
        marginLeft: Dimensions.get('screen').height * 0.001,
    },
    imageBXH: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 1.55,
        height: Dimensions.get('screen').height * 1.2,
        marginTop: - Dimensions.get('screen').height * 0.555,
        marginBottom: - Dimensions.get('screen').height * 0.2,
        marginLeft: - Dimensions.get('screen').height * 0.22,
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 1,
        height: Dimensions.get('screen').height * 1.2,
        marginTop: - Dimensions.get('screen').height * 0.9,
        marginBottom: - Dimensions.get('screen').height * 0.2,
        marginRight:  Dimensions.get('screen').height * 0.025,
    },
    swiper: {
        height: Dimensions.get('screen').height
    },
    container: {
        flex: 1,
    },
})