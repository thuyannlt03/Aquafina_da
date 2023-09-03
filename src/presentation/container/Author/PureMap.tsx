import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../resource/values/colors'
import { BUTTON_BLUE, IMAGE_BG_DOITAC, IMAGE_MAP, IMAGE_PURE_MAP, IMAGE_THUNG_CHUA, LOGO_COOPMART, LOGO_LOTTEMART } from '../../../../assets'
import Footer from '../../component/footer/Footer'
import Background from '../../component/background/Background'
import { HomeDrawerScreenProps } from '../../navigation/drawer/DrawerNavigation'
import { ButtonLogin } from '../../component/button/Button'

const PureMap: React.FC<HomeDrawerScreenProps<'PureMap'>> = ({route, navigation}) => {


    const menu = () => {
        navigation.openDrawer();
    }

    const logOut = () => {
        navigation.navigate('LogIn')
    };

    const goHome = () => {
        console.log(123)
    };

    return (
        <Background
            type='home'
            centerFocus={goHome}
            leftFocus={menu}
            rightFocus={logOut}
        >
            <View style={styles.container}>
                <View style={styles.boxBanner}>
                    <Image source={{ uri: IMAGE_THUNG_CHUA }} style={styles.imageThungChua} />

                    <Text style={styles.txtBanner_1}>BẢN ĐỒ XANH</Text>
                    <Text style={styles.txtBanner_2}><Text style={{ fontWeight: '700' }}>Địa điểm</Text> đặt</Text>
                    
                    <Image source={{ uri: IMAGE_PURE_MAP }} style={styles.imagePureMap} />
                    <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                title='Khám phá ngay'
                                titleStyle={styles.textBanner} />
                        </View>
                </View>

                <LinearGradient colors={[Colors.WHITE, Colors.BG_CONTENT_1, Colors.BG_CONTENT_0]}>
                    <Image source={{ uri: IMAGE_BG_DOITAC }} style={styles.imageBgDoiTac} />
                    <Text style={styles.txtDoiTac}>ĐỐI TÁC</Text>
                    <View style={styles.boxThanks}>
                        <Text style={styles.txtThanks}>
                            Aquafina hân hạnh đồng hành cùng các đối tác để lan
                            tỏa phong cách Xanh.</Text>
                    </View>
                    <View style={styles.boxImageDoiTac}>
                        <Image source={{ uri: LOGO_COOPMART }} style={styles.imageDoiTac} />
                        <Image source={{ uri: LOGO_LOTTEMART }} style={styles.imageDoiTac} />
                    </View>

                    <Text style={styles.txtBanner_3}>Địa điểm đặt “Trạm tái sinh” trên bản đồ</Text>
                    <Image source={{ uri: IMAGE_MAP }} style={styles.imageMap} />
                </LinearGradient>

                <Footer
                onPress_PureChart={() => navigation.navigate('PureChart')}
                onPress_PureCoin={() => navigation.navigate('PureCoin')}
                onPress_PureGift={() => navigation.navigate('PureGift')}
                onPress_PureMap={() => navigation.navigate('PureMap')}
                onPress_PureWorld={() => navigation.navigate('PureWorld')}
                />
            </View>
        </Background>

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
    imageThungChua: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.7
    },
    txtBanner_1: {
        width: Dimensions.get('screen').width,
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    txtBanner_2: {
        width: Dimensions.get('screen').width,
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    imagePureMap: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.62
    },
    Button: {

        width: Dimensions.get('screen').width * 0.6,
        height: Dimensions.get('screen').height * 0.07,
        bottom: Dimensions.get('screen').height * 0.07,


    },
    textBanner: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE
    },
    imageBgDoiTac: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.55
    },
    txtDoiTac: {
        width: Dimensions.get('screen').width,
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE_KV,
        textAlign: 'center',
        marginTop: Dimensions.get('screen').height * 0.03
    },
    boxThanks: {
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.03
    },
    txtThanks: {
        width: Dimensions.get('screen').width * 0.8,
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 14.4,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    boxImageDoiTac: {
        flexDirection: 'row',
    },
    imageDoiTac: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.3,
        height: Dimensions.get('screen').height * 0.1,
        margin: Dimensions.get('screen').width * 0.1,
    },
    txtBanner_3: {
        width: Dimensions.get('screen').width,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19.2,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    imageMap: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.3
    },
})