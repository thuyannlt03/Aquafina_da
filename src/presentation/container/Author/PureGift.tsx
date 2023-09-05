import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../resource/values/colors'
import { BUTTON_BLUE, IMAGE_BG_GIFT, IMAGE_DOI_TAC, IMAGE_THE_LE } from '../../../../assets'
import SnapCarousel from '../../component/carousel/SnapCarusel'
import Background from '../../component/background/Background'
import Footer from '../../component/footer/Footer'
import { HomeDrawerScreenProps } from '../../navigation/drawer/DrawerNavigation'
import { RootState,  useAppDispatch } from '../../shared-state/redux/store'
import { signOut} from '../../shared-state/redux/reducers'
import { useSelector } from 'react-redux'
import { DialogLogIn, DialogLogOut } from '../../component/dialog/Dialog'
import { ButtonLogin } from '../../component/button/Button'


export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.52);

const PureGift: React.FC<HomeDrawerScreenProps<'PureGift'>> = ({ route, navigation }) => {

    const dispatch = useAppDispatch();
    const [showPopupLogOut, setShowPopupLogOut] = useState(false);
    const [showPopupLogIn, setShowPopupLogIn] = useState(false);

    const isLogin: boolean = useSelector<RootState, boolean>(
        (state) => state.user.isLogin
    )

    const menu = () => {
        navigation.openDrawer();
    }

    const logOut = () => {
        dispatch(signOut());
        navigation.navigate('Home');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    const goHome = () => {
        navigation.navigate('Home')
    };

    const goChart = () => {
        if (isLogin) {
            navigation.navigate('PureChart')
            navigation.reset({
                index: 0,
                routes: [{ name: 'PureChart' }],
            });
        }
        else {
            setShowPopupLogIn(true);
        }
    }

    const goCoin = () => {
        if (isLogin) {
            navigation.navigate('PureCoin')
            navigation.reset({
                index: 0,
                routes: [{ name: 'PureCoin' }],
            });
        }
        else{
            setShowPopupLogIn(true);
        }
    }
    
    const goGift = () => {
        navigation.navigate('PureGift')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureGift' }],
        });
    }
    const goMap = () => {
        navigation.navigate('PureMap')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureMap' }],
        });
    }
    const goWorld = () => {
        navigation.navigate('PureWorld')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureWorld' }],
        });
    }
    const Rules = () =>{
        navigation.navigate('Rules')
    }

    return (
        <Background
            type='home'
            centerFocus={goHome}
            leftFocus={menu}
            rightFocus={isLogin ? () => setShowPopupLogOut(true) : () => navigation.navigate('LogIn')}
        >
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
                  
                  
                </View>
                <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                title='Khám phá ngay'
                                titleStyle={styles.textBanner} 
                                onPress={Rules}/>
                        
                        </View>
                <Image source={{ uri: IMAGE_DOI_TAC }} style={styles.imageDoiTac} />
            </View>
            <Footer
                onPress_PureChart={goChart}
                onPress_PureCoin={goCoin}
                onPress_PureGift={goGift}
                onPress_PureMap={goMap}
                onPress_PureWorld={goWorld}
                onPressReport={() => navigation.navigate('ReportError')}
            />
            <DialogLogOut
                isVisible={showPopupLogOut}
                onPressCancel={() => setShowPopupLogOut(false)}
                onPressLogout={logOut}
            />
            <DialogLogIn
                isVisible={showPopupLogIn}
                onPressCancel={() => setShowPopupLogIn(false)}
                onPressLogIn={() => {
                    setShowPopupLogIn(false);
                    navigation.navigate('LogIn');
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }}
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
  
    Button: {

        width: Dimensions.get('screen').width * 0.6,
        height: Dimensions.get('screen').height * 0.07,
        bottom: Dimensions.get('screen').height * 0.07,
        marginLeft:'20%'


    },
    textBanner: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE
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
        resizeMode: 'cover',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.3,
        bottom: - Dimensions.get('screen').height * 0.03,
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
   
    imageDoiTac: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.3,
        top: Dimensions.get('screen').height * 0.01,
    },
})