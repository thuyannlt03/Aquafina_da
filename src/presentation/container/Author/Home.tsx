import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Background from '../../component/background/Background'
import SnapCarousel from '../../component/carousel/SnapCarusel'
import Swiper from 'react-native-swiper'
import { Banners } from '../../../domain/entity/Banner'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../shared-state/redux/store'
import {  getUsers } from '../../shared-state/redux/reducers/UserReducer'
import { getBannsers } from '../../shared-state/redux/reducers/BannerReducer'
import { Colors } from '../../resource/values/colors'
import { BUTTON_BLUE, IMAGE_BANNER_4, IMAGE_BG_BG_COIN, IMAGE_MAP_HOME, IMAGE_STROKE_AQUFINA_TOP, IMAGE_TEXT_XANK, IMAGE_TONG_CHAI_THU_DUOC } from '../../../../assets'
import { ButtonLogin} from '../../component/button/Button'
import { Chart } from '../../component/chart'
import { Users } from '../../../domain/entity/Users'
import Footer from '../../component/footer/Footer'
import { HomeDrawerScreenProps } from '../../navigation/drawer/DrawerNavigation'

const Home: React.FC<HomeDrawerScreenProps<'Home'>> = ({ route, navigation }) => {
    // const Home = () => {

    const dispatch = useAppDispatch();

    const listBanner: Banners[] = useSelector<RootState, Banners[]>(
        (state) => state.banner.banners
    );

    const listUsers: Users[] = useSelector<RootState, Users[]>(
        (state) => state.user.usersData
    );

    useEffect(() => {
        dispatch(getBannsers());
        dispatch(getUsers(5));
        return () => { }
    }, [])

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
                <View style={styles.boxbanner}>

                    <Swiper

                        autoplayTimeout={3}
                        autoplay
                        loop
                        style={styles.swipper}
                        paginationStyle={styles.pagination}
                    >
                        {
                            listBanner.map((item) => {
                                return (
                                    <Image source={{ uri: item.image }} style={styles.imageBanner} key={item.keyBanner} />
                                )
                            })
                        }
                    </Swiper>
                    <View style={styles.boxButton}>
                        <View style={styles.Button}>
                            <ButtonLogin

                                backgroundImage={BUTTON_BLUE}
                                title='Tìm hiểu thêm'
                                titleStyle={styles.textBanner} />
                        </View>
                    </View>
                </View>
                <View style={styles.boxSumBottle}>
                    {/* <Image source={{ uri: IMAGE_STROKE_AQUFINA_TOP }} style={styles.imageStrokeAqua} /> */}
                    <Image source={{ uri: IMAGE_TONG_CHAI_THU_DUOC }} style={styles.imageSumBottle} />
                </View>
                <Chart
                    isLogin={false}
                    listData={listUsers}
                    where='home'
                />
                <View style={styles.boxGift} >
                    <Image source={{ uri: IMAGE_BG_BG_COIN }} style={styles.imageBGBG} />
                    <Text style={styles.textGift}>QUÀ TẶNG XANH</Text>
                    <Text style={styles.text_1}>PHỤ KIỆN</Text>
                    <Image source={{ uri: IMAGE_TEXT_XANK }} style={styles.imageXanh} />
                    <Text style={styles.text_2}>Tự tin <Text style={{ fontWeight: '700' }}>Sải bước</Text></Text>
                    <Text style={[styles.text_3, { marginTop: Dimensions.get('screen').height * 0.01 }]}>QUÀ TẶNG ĐƯỢC LÀM TỪ VẢI</Text>
                    <Text style={styles.text_3}>TÁI CHẾ CỦA AQUAFINA</Text>

                    <SnapCarousel
                        isShowPagination='flex'
                    />
                </View>
                <View style={styles.boxMap}>
                    <Image source={{ uri: IMAGE_MAP_HOME }} style={styles.imageBanner} />
                    <View style={styles.boxButton}>
                        <View style={styles.Button}>
                            <ButtonLogin
                                backgroundImage={BUTTON_BLUE}
                                title='Khám phá ngay'
                                titleStyle={styles.textBanner} />
                        </View>
                    </View>
                </View>
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

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxbanner: {
        alignItems: 'center',
    },
    swipper: {
        height: Dimensions.get('screen').height * 0.70,
        backgroundColor: Colors.BACKGROUND_PRIMARY
    },
    pagination: {
        marginBottom: - Dimensions.get('screen').height * 0.01
    },
    imageBanner: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.7,
    },

    boxButton: {

        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
        padding: Dimensions.get('screen').width * 0.04,
        bottom: - Dimensions.get('screen').height * 0.08,
        alignItems: 'center',

    },
    Button: {
        width: Dimensions.get('screen').width * 0.6,
        height: Dimensions.get('screen').height * 0.07,

    },
    textBanner: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE
    },
    boxSumBottle: {
        marginBottom: - Dimensions.get('screen').height * 0.025
    },
    imageStrokeAqua: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.05,
    },
    imageSumBottle: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.25,
    },
    boxGift: {
        flexDirection: 'column',
    },
    imageBGBG: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 1.5,
        height: Dimensions.get('screen').height,
        marginStart: - Dimensions.get('screen').width * 0.25,
    },
    textGift: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE_KV,
        marginTop: Dimensions.get('screen').height * 0.03
    },
    text_1: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '700',
        lineHeight: 27.6,
        color: Colors.BLUE,
        marginTop: Dimensions.get('screen').height * 0.03
    },
    imageXanh: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.04,
        marginTop: - Dimensions.get('screen').height * 0.02
    },
    text_2: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 14.4,
        color: Colors.BLUE_KV,
        marginTop: Dimensions.get('screen').height * 0.02
    },
    text_3: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.BLUE_KV
    },
    imageMap: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    boxMap: {
        alignItems: 'center',
    }
})