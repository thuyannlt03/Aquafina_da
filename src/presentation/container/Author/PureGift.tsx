import { ScrollView, StatusBar, Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Header from '../../component/header/Header'
import { Colors } from '../../resource/values/colors'
import { BUTTON_BLUE, IMAGE_BANNER_4, IMAGE_BG_GIFT, IMAGE_DOI_TAC, IMAGE_THE_LE } from '../../../../assets'
import SnapCarousel from '../../component/carousel/SnapCarusel'
import Background from '../../component/background/Background'
import Footer from '../../component/footer/Footer'
import { HomeDrawerScreenProps } from '../../navigation/drawer/DrawerNavigation'
import { ButtonLogin } from '../../component/button/Button'
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.52);

const PureGift: React.FC<HomeDrawerScreenProps<'PureGift'>> = ({ route, navigation }) => {

    const menu = () => {
        navigation.openDrawer();
    }

    const logOut = () => {
        navigation.navigate('LogIn')
    };

    const Rule = () => {
        navigation.navigate('Rule')
    };

    const goHome = () => {
        console.log(123)
    };

    return (
        <Background
            type='home'
            centerFocus={goHome}
            leftFocus={menu}
            rightFocus={logOut}>
            <View style={styles.container}>
                <Text style={styles.txtTitle}>Quà Tặng Xanh</Text>
                <View style={styles.boxCarousel}>
                    <Image source={{ uri: IMAGE_BG_GIFT }} style={styles.imageBackgroundGift} />
                    <View >
                        <SnapCarousel
                            isShowPagination='none'
                        />
                    </View>
                </View>
                <View style={styles.banner}>
               
                    <Image source={{ uri: IMAGE_THE_LE }} style={styles.imageBanner} />

                    <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                title='Khám phá ngay'
                                titleStyle={styles.textBanner} 
                                onPress={Rule}/>
                        </View>
                </View>
                <Image source={{ uri: IMAGE_DOI_TAC }} style={styles.imageDoiTac} />
            </View>
            <Footer
                onPress_PureChart={() => navigation.navigate('PureChart')}
                onPress_PureCoin={() => navigation.navigate('PureCoin')}
                onPress_PureGift={() => navigation.navigate('PureGift')}
                onPress_PureMap={() => navigation.navigate('PureMap')}
                onPress_PureWorld={() => navigation.navigate('PureWorld')}
            />
        </Background>
    )
}

export default PureGift

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    txtTitle: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '900',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
        marginVertical: Dimensions.get('screen').height * 0.02,
    },
    boxCarousel: {
        justifyContent: 'center',
        alignContent: 'center',
        height: Dimensions.get('screen').height * 0.4
    },
    imageBackgroundGift: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.5,
    },
    banner: {
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        alignItems: 'center',
    },
    imageBanner: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.7,
    },
    button: {
        position: 'absolute',
        zIndex: 1,
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.05,
        backgroundColor: Colors.BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        bottom: Dimensions.get('screen').height * 0.01,
    },
    textButton: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE,
    },
    imageDoiTac: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.3,
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
})