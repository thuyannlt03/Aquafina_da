import { StyleSheet, Text, View, ScrollView, Image, Dimensions, ImageBackground, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../component/background/Background'
import { AOKHOAC, AOTHUN, BUTTON_BLUE, IMAGE_POPUP_HAPPY, IMAGE_RIPPLE_RING, IMAGE_RIPPLE_RULES, NON, TUI, TUIS, VE, VO } from '../../../assets'
import { Colors } from '../../resource'
import { Banners } from '../../../domain/entity/Banner'
import { getBannsers } from '../../shared-state/redux/reducers/BannerReducer'
import { useSelector } from 'react-redux'
import { RootState,  useAppDispatch } from '../../shared-state/redux/store'
import {  getUsers } from '../../shared-state/redux/reducers/UserReducer'
import { signOut} from '../../shared-state/redux/reducers'
import Footer from '../../component/footer/Footer'
import { HomeDrawerScreenProps } from '../../navigation/drawer/DrawerNavigation'
import { DialogLogIn, DialogLogOut } from '../../component/dialog/Dialog'
import { ButtonLogin } from '../../component/button/Button'
import { Users } from '../../../domain/entity/Users'

const Rules: React.FC<HomeDrawerScreenProps<'Rules'>> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();

    const isLogin: boolean = useSelector<RootState, boolean>(
        (state) => state.user.isLogin
    )

    const [showPopupHappy, setShowPopupHappy] = useState(isLogin);
    const [showPopupLogOut, setShowPopupLogOut] = useState(false);
    const [showPopupLogIn, setShowPopupLogIn] = useState(false);

    const listBanner: Banners[] = useSelector<RootState, Banners[]>(
        (state) => state.banner.banners
    );

    const listUsers: Users[] = useSelector<RootState, Users[]>(
        (state) => state.user.usersData
    );


    const user: Users = useSelector<RootState, Users>(
        (state) => state.user.userData
    )

    useEffect(() => {
        dispatch(getBannsers());

        dispatch(getUsers(11));

        if (isLogin) {
            setShowPopupHappy(true);
        }

        return () => { }
    }, [])

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


  const PureGift = () => {
    navigation.navigate('PureGift')
  };

  const text2 = "Bước 1: Người chơi đến các địa điểm lắp đặt máy ";
  const boldAndUpperTexts2 = ["Bước 1"];
  const regex2 = new RegExp(`(${boldAndUpperTexts2.join('|')})`, 'gi');

  const getTextWithBoldAndUpper2 = (text2: string, boldAndUpperTexts2: any) => {
    const parts2 = text2.split(regex2);
    return parts2.map((part, index) => {
      const isBoldAndUpper2 = boldAndUpperTexts2.includes(part);
      return isBoldAndUpper2 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text3 = "Aquafina (sau đây được gọi tắt là  “Trạm tái sinh”)";
  const boldAndUpperTexts3 = ["“Trạm tái sinh”"];
  const regex3 = new RegExp(`(${boldAndUpperTexts3.join('|')})`, 'gi');

  const getTextWithBoldAndUpper3 = (text3: string, boldAndUpperTexts3: any) => {
    const parts3 = text3.split(regex3);
    return parts3.map((part, index) => {
      const isBoldAndUpper3 = boldAndUpperTexts3.includes(part);
      return isBoldAndUpper3 ? (
        <Text key={index} style={{ fontWeight: '500', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text4 = "để tham gia vào chương trình “Tái sinh chai ";
  const boldAndUpperTexts4 = ["“Tái sinh chai "];
  const regex4 = new RegExp(`(${boldAndUpperTexts4.join('|')})`, 'gi');

  const getTextWithBoldAndUpper4 = (text4: string, boldAndUpperTexts4: any) => {
    const parts4 = text4.split(regex4);
    return parts4.map((part, index) => {
      const isBoldAndUpper4 = boldAndUpperTexts4.includes(part);
      return isBoldAndUpper4 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text5 = "nhựa – Nhận quà sống xanh”.";
  const boldAndUpperTexts5 = ["nhựa – Nhận quà sống xanh”"];
  const regex5 = new RegExp(`(${boldAndUpperTexts5.join('|')})`, 'gi');

  const getTextWithBoldAndUpper5 = (text5: string, boldAndUpperTexts5: any) => {
    const parts5 = text5.split(regex5);
    return parts5.map((part, index) => {
      const isBoldAndUpper5 = boldAndUpperTexts5.includes(part);
      return isBoldAndUpper5 ? (
        <Text key={index} style={{ fontWeight: '500', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text6 = "Bước 2: Người chơi nhấn vào nút “Bắt đầu” trên";
  const boldAndUpperTexts6 = ["Bước 2", "“Bắt đầu”"];
  const regex6 = new RegExp(`(${boldAndUpperTexts6.join('|')})`, 'gi');

  const getTextWithBoldAndUpper6 = (text6: string, boldAndUpperTexts6: any) => {
    const parts6 = text6.split(regex6);
    return parts6.map((part, index) => {
      const isBoldAndUpper6 = boldAndUpperTexts6.includes(part);
      return isBoldAndUpper6 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text7 = "Bước 3: Người chơi bỏ chai nhựa rỗng vào vị trí";
  const boldAndUpperTexts7 = ["Bước 3"];
  const regex7 = new RegExp(`(${boldAndUpperTexts7.join('|')})`, 'gi');

  const getTextWithBoldAndUpper7 = (text7: string, boldAndUpperTexts7: any) => {
    const parts7 = text7.split(regex7);
    return parts7.map((part, index) => {
      const isBoldAndUpper7 = boldAndUpperTexts7.includes(part);
      return isBoldAndUpper7 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text8 = "có ghi “Nhận chai ở đây” của máy tại Trạm Tái";
  const boldAndUpperTexts8 = ["“Nhận chai ở đây”"];
  const regex8 = new RegExp(`(${boldAndUpperTexts8.join('|')})`, 'gi');

  const getTextWithBoldAndUpper8 = (text8: string, boldAndUpperTexts8: any) => {
    const parts8 = text8.split(regex8);
    return parts8.map((part, index) => {
      const isBoldAndUpper8 = boldAndUpperTexts8.includes(part);
      return isBoldAndUpper8 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text9 = "Bước 4: Sau khi hệ thống xử lý xong, màn hình";
  const boldAndUpperTexts9 = ["Bước 4"];
  const regex9 = new RegExp(`(${boldAndUpperTexts9.join('|')})`, 'gi');

  const getTextWithBoldAndUpper9 = (text9: string, boldAndUpperTexts9: any) => {
    const parts9 = text9.split(regex9);
    return parts9.map((part, index) => {
      const isBoldAndUpper9 = boldAndUpperTexts9.includes(part);
      return isBoldAndUpper9 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text10 = "dẫn vào website: http://aquafina.pepsishop.vn/.";
  const boldAndUpperTexts10 = [" http://aquafina.pepsishop.vn/."];
  const regex10 = new RegExp(`(${boldAndUpperTexts10.join('|')})`, 'gi');

  const getTextWithBoldAndUpper10 = (text10: string, boldAndUpperTexts10: any) => {
    const parts10 = text10.split(regex10);
    return parts10.map((part, index) => {
      const isBoldAndUpper10 = boldAndUpperTexts10.includes(part);
      return isBoldAndUpper10 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text11 = "quét mã QR để dẫn về website: http://";
  const boldAndUpperTexts11 = ["http://"];
  const regex11 = new RegExp(`(${boldAndUpperTexts11.join('|')})`, 'gi');

  const getTextWithBoldAndUpper11 = (text11: string, boldAndUpperTexts11: any) => {
    const parts11 = text11.split(regex11);
    return parts11.map((part, index) => {
      const isBoldAndUpper11 = boldAndUpperTexts11.includes(part);
      return isBoldAndUpper11 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text12 = "aquafina.pepsishop.vn/, người chơi cần nhập số";
  const boldAndUpperTexts12 = ["aquafina.pepsishop.vn/"];
  const regex12 = new RegExp(`(${boldAndUpperTexts12.join('|')})`, 'gi');

  const getTextWithBoldAndUpper12 = (text12: string, boldAndUpperTexts12: any) => {
    const parts12 = text12.split(regex12);
    return parts12.map((part, index) => {
      const isBoldAndUpper12 = boldAndUpperTexts12.includes(part);
      return isBoldAndUpper12 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text13 = "Chai Aquafina: người chơi được ghi nhận 2 điểm";
  const boldAndUpperTexts13 = ["Chai Aquafina:"];
  const regex13 = new RegExp(`(${boldAndUpperTexts13.join('|')})`, 'gi');

  const getTextWithBoldAndUpper13 = (text13: string, boldAndUpperTexts13: any) => {
    const parts13 = text13.split(regex13);
    return parts13.map((part, index) => {
      const isBoldAndUpper13 = boldAndUpperTexts13.includes(part);
      return isBoldAndUpper13 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text14 = "Không phải chai Aquafina: người chơi được ghi";
  const boldAndUpperTexts14 = ["Không phải chai Aquafina:"];
  const regex14 = new RegExp(`(${boldAndUpperTexts14.join('|')})`, 'gi');

  const getTextWithBoldAndUpper14 = (text14: string, boldAndUpperTexts14: any) => {
    const parts14 = text14.split(regex14);
    return parts14.map((part, index) => {
      const isBoldAndUpper14 = boldAndUpperTexts14.includes(part);
      return isBoldAndUpper14 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text15 = "Bước 5:	Mỗi tuần, căn cứ vào số lượng người chơi";
  const boldAndUpperTexts15 = ["Bước 5"];
  const regex15 = new RegExp(`(${boldAndUpperTexts15.join('|')})`, 'gi');

  const getTextWithBoldAndUpper15 = (text15: string, boldAndUpperTexts15: any) => {
    const parts15 = text15.split(regex15);
    return parts15.map((part, index) => {
      const isBoldAndUpper15 = boldAndUpperTexts15.includes(part);
      return isBoldAndUpper15 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  }; const text16 = "SPVB sẽ công bố bảng xếp hạng 400 người chơi ";
  const boldAndUpperTexts16 = ["400 người"];
  const regex16 = new RegExp(`(${boldAndUpperTexts16.join('|')})`, 'gi');

  const getTextWithBoldAndUpper16 = (text16: string, boldAndUpperTexts16: any) => {
    const parts16 = text16.split(regex16);
    return parts16.map((part, index) => {
      const isBoldAndUpper16 = boldAndUpperTexts16.includes(part);
      return isBoldAndUpper16 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  }; const text17 = "trên bảng xếp hạng tại website http://";
  const boldAndUpperTexts17 = ["http://"];
  const regex17 = new RegExp(`(${boldAndUpperTexts17.join('|')})`, 'gi');

  const getTextWithBoldAndUpper17 = (text17: string, boldAndUpperTexts17: any) => {
    const parts17 = text17.split(regex17);
    return parts17.map((part, index) => {
      const isBoldAndUpper17 = boldAndUpperTexts17.includes(part);
      return isBoldAndUpper17 ? (
        <Text key={index} style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: Colors.BLACK }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  }; const text18 = "aquafina.pepsishop.vn/  và trên fanpage https://";
  const boldAndUpperTexts18 = ["aquafina.pepsishop.vn/", "https://"];
  const regex18 = new RegExp(`(${boldAndUpperTexts18.join('|')})`, 'gi');

  const getTextWithBoldAndUpper18 = (text18: string, boldAndUpperTexts18: any) => {
    const parts18 = text18.split(regex18);
    return parts18.map((part, index) => {
      const isBoldAndUpper18 = boldAndUpperTexts18.includes(part);
      return isBoldAndUpper18 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK, textDecorationLine: 'underline' }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text19 = "www.facebook.com/Aquafinavietnam) vào lúc";
  const boldAndUpperTexts19 = ["www.facebook.com/Aquafinavietnam"];
  const regex19 = new RegExp(`(${boldAndUpperTexts19.join('|')})`, 'gi');

  const getTextWithBoldAndUpper19 = (text19: string, boldAndUpperTexts19: any) => {
    const parts19 = text19.split(regex19);
    return parts19.map((part, index) => {
      const isBoldAndUpper19 = boldAndUpperTexts19.includes(part);
      return isBoldAndUpper19 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK, textDecorationLine: 'underline' }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text20 = "fanpage Aquafina và trên website http://";
  const boldAndUpperTexts20 = ["http://"];
  const regex20 = new RegExp(`(${boldAndUpperTexts20.join('|')})`, 'gi');

  const getTextWithBoldAndUpper20 = (text20: string, boldAndUpperTexts20: any) => {
    const parts20 = text20.split(regex20);
    return parts20.map((part, index) => {
      const isBoldAndUpper20 = boldAndUpperTexts20.includes(part);
      return isBoldAndUpper20 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK, textDecorationLine: 'underline' }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text21 = "aquafina.pepsishop.vn/  vào lúc 12h00’ giờ ngày";
  const boldAndUpperTexts21 = ["aquafina.pepsishop.vn/"];
  const regex21 = new RegExp(`(${boldAndUpperTexts21.join('|')})`, 'gi');

  const getTextWithBoldAndUpper21 = (text21: string, boldAndUpperTexts21: any) => {
    const parts21 = text21.split(regex21);
    return parts21.map((part, index) => {
      const isBoldAndUpper21 = boldAndUpperTexts21.includes(part);
      return isBoldAndUpper21 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK, textDecorationLine: 'underline' }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text22 = "https://www.facebook.com/Aquafinavietnam ";
  const boldAndUpperTexts22 = ["https://www.facebook.com/Aquafinavietnam"];
  const regex22 = new RegExp(`(${boldAndUpperTexts22.join('|')})`, 'gi');

  const getTextWithBoldAndUpper22 = (text22: string, boldAndUpperTexts22: any) => {
    const parts22 = text22.split(regex22);
    return parts22.map((part, index) => {
      const isBoldAndUpper22 = boldAndUpperTexts22.includes(part);
      return isBoldAndUpper22 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK, textDecorationLine: 'underline' }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text23 = "của chương trình tại: https://www.facebook.com/";
  const boldAndUpperTexts23 = ["https://www.facebook.com/"];
  const regex23 = new RegExp(`(${boldAndUpperTexts23.join('|')})`, 'gi');

  const getTextWithBoldAndUpper23 = (text23: string, boldAndUpperTexts23: any) => {
    const parts23 = text23.split(regex23);
    return parts23.map((part, index) => {
      const isBoldAndUpper23 = boldAndUpperTexts23.includes(part);
      return isBoldAndUpper23 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK, textDecorationLine: 'underline' }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };
  const text24 = "Aquafinavietnam hoặc gọi điện theo số tổng đài";
  const boldAndUpperTexts24 = ["Aquafinavietnam "];
  const regex24 = new RegExp(`(${boldAndUpperTexts24.join('|')})`, 'gi');

  const getTextWithBoldAndUpper24 = (text24: string, boldAndUpperTexts24: any) => {
    const parts24 = text24.split(regex24);
    return parts24.map((part, index) => {
      const isBoldAndUpper24 = boldAndUpperTexts24.includes(part);
      return isBoldAndUpper24 ? (
        <Text key={index} style={{ fontWeight: 'bold', color: Colors.BLACK, textDecorationLine: 'underline' }}>{part}</Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };

  return (
    <Background
      type='home'
      leftFocus={menu}
      rightFocus={isLogin ? () => setShowPopupLogOut(true) : () => navigation.navigate('LogIn')}
    >
      <View style={styles.container}>

        <View style={styles.boxBanner}>
          <ScrollView>


            <ImageBackground source={{ uri: IMAGE_RIPPLE_RING }} style={styles.imageBottleAquafina}>
              <Text style={styles.textTitle}>THỂ LỆ CHƯƠNG TRÌNH</Text>
              <Text style={styles.textTitle1}>TÁI SINH CHAI NHỰA - NHẬN QUÀ SỐNG XANH</Text>
              <Text style={styles.des}>(Diễn ra từ ngày 17/07/2022 đến hết ngày 17/10/2022)</Text>

              <Text style={styles.textTitleb}>1. Đối tượng tham gia</Text>
              <Text style={styles.des1}>Chương trình dành cho người chơi là công dân nước </Text>
              <Text style={styles.des2}>Cộng hòa Xã hội chủ nghĩa Việt Nam, và trên 18 tuổi.</Text>

              <Text style={styles.textTitleb}>2. Nội dung và thể lệ chi tiết chương trình</Text>
              <Text style={styles.textTitlec}>2.1 Cách thức tham gia chương trình:</Text>
              <Text style={styles.des1}>Người chơi tham gia chương trình bằng cách thực</Text>
              <Text style={styles.des2}>hiện theo các bước dưới đây:</Text>

              <Text style={styles.text1}>{getTextWithBoldAndUpper2(text2, boldAndUpperTexts2)}</Text>
              <Text style={styles.text}>thu gom vỏ chai nhựa đã qua sử dụng của</Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper3(text3, boldAndUpperTexts3)}</Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper4(text4, boldAndUpperTexts4)}</Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper5(text5, boldAndUpperTexts5)}</Text>
              <Text style={styles.text}>Tại mỗi Trạm Tái Sinh sẽ có lắp đặt một màn hình</Text>
              <Text style={styles.text}>LCD (hoặc màn hình điện tử) ghi rõ thông tin</Text>
              <Text style={styles.text}>hướng dẫn người tham gia thực hiện theo các </Text>
              <Text style={styles.text}>bước tuần tự để hoàn thành một lượt tham gia.</Text>
              <Text style={styles.text1}>{getTextWithBoldAndUpper6(text6, boldAndUpperTexts6)}</Text>
              <Text style={styles.text}>màn hình LCD (hoặc màn hình điện tử, tùy từng</Text>
              <Text style={styles.text}>Trạm Tái Sinh) để bắt đầu một lượt tham gia.</Text>
              <Text style={styles.text1}>{getTextWithBoldAndUpper7(text7, boldAndUpperTexts7)}</Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper8(text8, boldAndUpperTexts8)}</Text>
              <Text style={styles.text}>Sinh và chờ hệ thống xử lý.</Text>
              <Text style={styles.text1}>{getTextWithBoldAndUpper9(text9, boldAndUpperTexts9)}</Text>
              <Text style={styles.text}>LCD/điện tử sẽ trả về một mã QR. Người chơi sử</Text>
              <Text style={styles.text}>dụng điện thoại để quét mã QR trên màn hình để </Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper10(text10, boldAndUpperTexts10)}</Text>
              <Text style={styles.text4}>Nếu người chơi lần đầu tham gia, người chơi cần</Text>
              <Text style={styles.text3}>thực hiện đăng ký tài khoản bằng cách nhập số </Text>
              <Text style={styles.text3}>điện thoại theo hướng dẫn tại website. Hệ thống</Text>
              <Text style={styles.text3}>sẽ gửi mã OTP để xác minh số điện thoại của</Text>
              <Text style={styles.text3}>người chơi. Người chơi cần nhập mã OTP để </Text>
              <Text style={styles.text3}>đăng nhập và nhận thông báo về tổng điểm</Text>
              <Text style={styles.text3}>Aquafina mình đã tích lũy. </Text>


            </ImageBackground>
            <ImageBackground source={{ uri: IMAGE_RIPPLE_RING }} style={styles.imageBottleAquafina}>
              <Text style={styles.text4}>Nếu người chơi đã đăng ký tài khoản, thì khi</Text>
              <Text style={styles.text3}>{getTextWithBoldAndUpper11(text11, boldAndUpperTexts11)}</Text>
              <Text style={styles.text3}>{getTextWithBoldAndUpper12(text12, boldAndUpperTexts12)}</Text>
              <Text style={styles.text3}>điện thoại để hệ thống ghi nhận điểm Aquafina</Text>
              <Text style={styles.text3}>của lượt tham gia mới. </Text>
              <Text style={styles.text1}>Người chơi sẽ được tích lũy điểm Aquafina và</Text>
              <Text style={styles.text}>điểm Aquafina sẽ được tổng kết mỗi tuần theo tỷ</Text>
              <Text style={styles.text}>lệ quy đổi điểm như sau: </Text>
              <Text style={styles.text4}>{getTextWithBoldAndUpper13(text13, boldAndUpperTexts13)}</Text>
              <Text style={styles.text3}> Aquafina cho mỗi vỏ chai Aquafina.</Text>
              <Text style={styles.text4}>{getTextWithBoldAndUpper14(text14, boldAndUpperTexts14)}</Text>
              <Text style={styles.text3}>nhận 1 điểm Aquafina cho mỗi vỏ chai.</Text>
              <Text style={styles.text1}>{getTextWithBoldAndUpper15(text15, boldAndUpperTexts15)}</Text>
              <Text style={styles.text}>và điểm Aquafina mà người chơi tích lũy được,</Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper16(text16, boldAndUpperTexts16)}</Text>
              <Text style={styles.text}>có điểm Aquafina cao nhất (được hiển thị đầy đủ </Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper17(text17, boldAndUpperTexts17)}</Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper18(text18, boldAndUpperTexts18)}</Text>
              <Text style={styles.text2}>{getTextWithBoldAndUpper19(text19, boldAndUpperTexts19)}</Text>
              <Text style={styles.text}>12h00’ giờ ngày thứ 7 hàng tuần (hoặc một thời</Text>
              <Text style={styles.text}>gian khác theo quyết định của Công ty TNHH</Text>
              <Text style={styles.text}>Nước giải khát Suntory PepsiCo Việt Nam - SPVB)</Text>
              <Text style={styles.text}>trong thời gian diễn ra chương trình.</Text>
              <Text style={styles.text5}>*Lưu ý: Người chơi vẫn có thể tiếp tục chơi và</Text>
              <Text style={styles.text6}>tích lũy điểm Aquafina ở các tuần tiếp theo để có</Text>
              <Text style={styles.text6}>cơ hội nhận được các phần quà trong thời gian</Text>
              <Text style={styles.text6}>diễn ra chương trình.  </Text>

              <Text style={styles.textTitlec}>2.2 Những quy định về chương trình:</Text>
              <Text style={styles.text1}>Số điểm Aquafina có được hàng tuần sẽ không</Text>
              <Text style={styles.text2}>được cộng dồn trong suốt thời gian diễn ra</Text>
              <Text style={styles.text2}>chương trình, mà sẽ được tổng kết điểm Aquafina</Text>
              <Text style={styles.text2}>vào mỗi tuần.</Text>
              <Text style={styles.text1}>Quà tặng chỉ được trao bằng hiện vật, không có</Text>
              <Text style={styles.text2}>giá trị quy đổi thành tiền mặt.</Text>

              <Text style={styles.text1}>Do số lượng quà tặng có giới hạn, SPVB có quyền </Text>
              <Text style={styles.text2}>thay đổi quà tặng (về kích thước, màu sắc, sản</Text>
              <Text style={styles.text2}>phẩm) nhưng đảm bảo sẽ giữ nguyên giá trị đã</Text>
              <Text style={styles.text2}>cam kết.</Text>
              <Text style={styles.text1}>Khi chương trình kết thúc, số điểm Aquafina</Text>
              <Text style={styles.text2}>không được sử dụng sẽ không còn giá trị.</Text>
              <Text style={styles.text1}>Chương trình có thể kết thúc sớm khi số lượng </Text>
              <Text style={styles.text2}>quà tặng đã được quy đổi hết.</Text>


            </ImageBackground>
            <ImageBackground source={{ uri: IMAGE_RIPPLE_RING }} style={styles.imageBottleAquafina1}>

              <Text style={styles.text1}>Người chơi chịu các khoản thuế, phí theo quy </Text>
              <Text style={styles.text2}>định của pháp luật khi nhận quà tặng theo</Text>
              <Text style={styles.text2}>chương trình này.</Text>
              <Text style={styles.text1}>Người chơi chịu các khoản thuế, phí theo quy </Text>
              <Text style={styles.text2}>định của pháp luật khi nhận quà tặng theo</Text>
              <Text style={styles.text2}>chương trình này.</Text>
              <Text style={styles.text1}>Số lượng quà tặng và điểm Aquafina cần thiết </Text>
              <Text style={styles.text2}>để quy đổi được quy định chi tiết theo bảng dưới đây</Text>
              <View style={styles.item}>
                <View style={styles.card}>
                  <Image source={AOKHOAC} style={styles.image} />
                  <View style={styles.gr}>
                    <Text style={styles.textcard}>Áo khoác cape</Text>
                    <Text style={styles.textcard1}>Aquafina x Headless</Text>
                    <Text style={styles.textcard2}>Số lượng quà tặng </Text>
                    <Text style={styles.textcard2}>mỗi tuần: 6</Text>
                    <Text style={styles.textcard2}>Cách thức đổi quà: </Text>
                    <Text style={styles.textcard2}>Trao cho 6 người có điểm</Text>
                    <Text style={styles.textcard2}> Aquaffina cao nhất</Text>
                    <Text style={styles.textcard2}>Giá trị quà tặng (+VAT):</Text>
                    <Text style={styles.textcard2}>1.200.000 đồng/ áo khoác </Text>
                  </View>
                </View>
                <View style={styles.card}>
                  <Image source={TUI} style={styles.imaget} />
                  <View style={styles.gr}>
                    <Text style={styles.textcard3}>Túi Tote</Text>
                    <Text style={styles.textcard4}>Aquafina x Headless</Text>
                    <Text style={styles.textcard5}>Số lượng quà tặng </Text>
                    <Text style={styles.textcard5}>mỗi tuần: 6</Text>
                    <Text style={styles.textcard5}>Cách thức đổi quà: </Text>
                    <Text style={styles.textcard5}>Trao cho 6 người có điểm</Text>
                    <Text style={styles.textcard5}> Aquaffina cao nhất</Text>
                    <Text style={styles.textcard5}>Giá trị quà tặng (+VAT):</Text>
                    <Text style={styles.textcard5}>800.000 đồng/ túi </Text>
                  </View>

                </View>
              </View>
            </ImageBackground>
            <ImageBackground source={{ uri: IMAGE_RIPPLE_RING }} style={styles.imageBottleAquafina2}>


              <View style={styles.item}>
                <View style={styles.card}>
                  <Image source={AOTHUN} style={styles.image} />
                  <View style={styles.gr}>
                    <Text style={styles.textcard}>Áo thun</Text>
                    <Text style={styles.textcard1}>Aquafina x Headless</Text>
                    <Text style={styles.textcard2}>Số lượng quà tặng </Text>
                    <Text style={styles.textcard2}>mỗi tuần: 100</Text>
                    <Text style={styles.textcard2}>Cách thức đổi quà: </Text>
                    <Text style={styles.textcard2}>Trao ngẫu nhiên cho 100 người</Text>
                    <Text style={styles.textcard2}>trong tổng số 388 người có</Text>
                    <Text style={styles.textcard2}>điểm Aquafina cao nhất còn lại</Text>
                    <Text style={styles.textcard2}>Giá trị quà tặng (+VAT):</Text>
                    <Text style={styles.textcard2}>200.000 đồng/ áo </Text>
                  </View>
                </View>
                <View style={styles.card}>
                  <Image source={NON} style={styles.imagen} />
                  <View style={styles.gr}>
                    <Text style={styles.textcard6}>Nón Aquafina x Headless</Text>
                    <Text style={styles.textcard7}>Số lượng quà tặng </Text>
                    <Text style={styles.textcard7}>mỗi tuần: 88</Text>
                    <Text style={styles.textcard7}>Cách thức đổi quà: </Text>
                    <Text style={styles.textcard7}>Trao ngẫu nhiên cho 88 người</Text>
                    <Text style={styles.textcard7}>trong tổng số 200 người có</Text>
                    <Text style={styles.textcard7}>điểm Aquafina cao nhất còn lại</Text>
                    <Text style={styles.textcard7}>Giá trị quà tặng (+VAT):</Text>
                    <Text style={styles.textcard7}>200.000 đồng/ nón </Text>
                  </View>

                </View>
              </View>
              <View style={styles.item}>
                <View style={styles.card}>
                  <Image source={VO} style={styles.image} />
                  <View style={styles.gr}>
                    <Text style={styles.textcard}>Vớ Aquafina x Repeet</Text>
                    <Text style={styles.textcard2}>Số lượng quà tặng </Text>
                    <Text style={styles.textcard2}>mỗi tuần: 100</Text>
                    <Text style={styles.textcard2}>Cách thức đổi quà: </Text>
                    <Text style={styles.textcard2}>Trao ngẫu nhiên cho 100 người</Text>
                    <Text style={styles.textcard2}>trong tổng số 200 người có</Text>
                    <Text style={styles.textcard2}>điểm Aquafina cao nhất còn lại</Text>
                    <Text style={styles.textcard2}>Giá trị quà tặng (+VAT):</Text>
                    <Text style={styles.textcard2}>50.000 đồng/ vớ </Text>
                  </View>
                </View>
                <View style={styles.card}>
                  <Image source={TUIS} style={styles.imaget} />
                  <View style={styles.gr}>
                    <Text style={styles.textcard}>Túi Tote</Text>
                    <Text style={styles.textcard1}>Aquafina x Headless</Text>
                    <Text style={styles.textcard2}>Số lượng quà tặng </Text>
                    <Text style={styles.textcard2}>mỗi tuần: 80</Text>
                    <Text style={styles.textcard2}>Cách thức đổi quà: </Text>
                    <Text style={styles.textcard2}>Trao ngẫu nhiên cho 100 người</Text>
                    <Text style={styles.textcard2}>trong tổng số 100 người có</Text>
                    <Text style={styles.textcard2}>điểm Aquafina cao nhất còn lại</Text>
                    <Text style={styles.textcard2}>Giá trị quà tặng (+VAT):</Text>
                    <Text style={styles.textcard2}>200.000 đồng/ túi </Text>
                  </View>

                </View>
              </View>

            </ImageBackground>
            <ImageBackground source={{ uri: IMAGE_RIPPLE_RING }} style={styles.imageBottleAquafina3}>
              <View style={styles.item}>
                <View style={styles.card}>
                  <Image source={VE} style={styles.imagea} />
                  <View style={styles.gr}>
                    <Text style={styles.textcard}>Voucher xem phim tại</Text>
                    <Text style={styles.textcard1}>rạp chiếu phim Lotte</Text>
                    <Text style={styles.textcard2}>Số lượng quà tặng </Text>
                    <Text style={styles.textcard2}>mỗi tuần: 100</Text>
                    <Text style={styles.textcard2}>Cách thức đổi quà: </Text>
                    <Text style={styles.textcard2}>Trao ngẫu nhiên cho 100 người</Text>
                    <Text style={styles.textcard2}>trong tổng số 200 người có</Text>
                    <Text style={styles.textcard2}>điểm Aquafina cao nhất còn lại</Text>
                    <Text style={styles.textcard2}>Giá trị quà tặng (+VAT):</Text>
                    <Text style={styles.textcard2}>50.000 đồng/ đôi vớ</Text>
                  </View>
                </View>

              </View>
              <Text style={styles.text4}>Mỗi tuần SPVB sẽ công bố danh sách 400 người</Text>
              <Text style={styles.text3}>chơi có điểm Aquafina cao nhất và quà tặng trên</Text>
              <Text style={styles.text3}>{getTextWithBoldAndUpper20(text20, boldAndUpperTexts20)}</Text>
              <Text style={styles.text3}>{getTextWithBoldAndUpper21(text21, boldAndUpperTexts21)}</Text>
              <Text style={styles.text9}>thứ 7 hàng tuần trong thời gian diễn ra chương trình,</Text>
              <Text style={styles.text3}>người chơi cần cung cấp thông tin cá nhân cho</Text>
              <Text style={styles.text3}>SPVB theo hướng dẫn trong vòng 7 ngày kể từ</Text>
              <Text style={styles.text3}>ngày đổi quà để được hướng dẫn nhận quà tặng.</Text>
              <Text style={styles.text3}>Việc người chơi cung cấp thông tin cá nhân cho</Text>
              <Text style={styles.text3}>SPVB theo mục đích này được hiểu là hành động</Text>
              <Text style={styles.text3}>cho phép SPVB thu thập và sử dụng thông tin</Text>
              <Text style={styles.text3}>cá nhân của người chơi theo mục địch đã nêu. </Text>
              <Text style={styles.text3}>Trong mọi trường hợp, việc người chơi gửi thông</Text>
              <Text style={styles.text3}>tin nhận quà sau thời gian quy định là không hợp</Text>
              <Text style={styles.text3}>lệ, và được xem là người chơi từ bỏ việc nhận quà.</Text>

              <Text style={styles.text4}>Quà tặng sẽ được vận chuyển đến địa chỉ mà </Text>
              <Text style={styles.text3}>người chơi đã cung cấp khi Bên thứ 3 – phụ trách</Text>
              <Text style={styles.text3}>việc vận chuyển quà cho SPVB  trong vòng 30</Text>
              <Text style={styles.text3}>ngày kể từ ngày kết thúc chương trình. Trong</Text>
              <Text style={styles.text3}>trường hợp bất khả kháng như thiên tai, dịch</Text>
              <Text style={styles.text3}>bệnh, việc vận chuyển có thể bị ảnh hưởng và</Text>
              <Text style={styles.text3}>thời gian trao quà sẽ kéo dài hơn so với thời hạn</Text>
              <Text style={styles.text3}>đã cam kết nêu trên. SPVB sẽ không chịu trách </Text>
              <Text style={styles.text3}>nhiệm nếu thông tin nhận quà mà người chơi</Text>
              <Text style={styles.text3}>cung cấp không chính xác. Người chơi có trách</Text>
              <Text style={styles.text3}>nhiệm ký tên trên phiếu giao hàng, biên bản bàn</Text>
              <Text style={styles.text3}>giao quà tặng, vận đơn bưu điện hoặc một tài liệu</Text>
              <Text style={styles.text3}>có tên gọi khác nhằm xác định đã nhận quà từ</Text>
              <Text style={styles.text3}>chương trình</Text>

              <Text style={styles.text4}>Mỗi cá nhân có quyền thắng nhiều hơn 1 giải  </Text>
              <Text style={styles.text3}> trong thời gian diễn ra chương trình với điều kiện</Text>
              <Text style={styles.text3}> không thắng giải trong cùng 1 thời điểm.</Text>
            </ImageBackground>
            <ImageBackground source={{ uri: IMAGE_RIPPLE_RING }} style={styles.imageBottleAquafina4}>
              <Text style={styles.textTitleb}>3. Quy định chung</Text>

              <Text style={styles.text1}>SPVB có quyền cập nhật và thay đổi thể lệ </Text>
              <Text style={styles.text}>chương trình này để phù hợp hơn với người chơi  </Text>
              <Text style={styles.text}>và thông báo công khai đến người chơi. Trong</Text>
              <Text style={styles.text}>trường hợp có sự thay đổi về thể lệ cũng như thời </Text>
              <Text style={styles.text}>gian tổ chức, SPVB sẽ thông báo trên trang </Text>
              <Text style={styles.text}>fanpage của chương trình tại</Text>
              <Text style={styles.text}>{getTextWithBoldAndUpper22(text22, boldAndUpperTexts22)}</Text>
              <Text style={styles.text}>Mọi thắc mắc liên quan đến chương trình, người  </Text>
              <Text style={styles.text}>chơi có thể nhắn tin vào hộp thư trang fan page</Text>
              <Text style={styles.text}>{getTextWithBoldAndUpper23(text23, boldAndUpperTexts23)}</Text>
              <Text style={styles.text}>{getTextWithBoldAndUpper24(text24, boldAndUpperTexts24)}</Text>
              <Text style={styles.text}>19001220. SPVB chỉ chịu trách nhiệm giải quyết</Text>
              <Text style={styles.text}>những khiếu nại, tranh chấp được gửi đến SPVB</Text>
              <Text style={styles.text}>trong thời hạn từ lúc bắt đầu chương trình cho</Text>
              <Text style={styles.text}>đến khi hoàn tất việc trao quà tặng cho người</Text>
              <Text style={styles.text}>chơi quy đổi quà tặng hợp lệ theo quy định tại</Text>
              <Text style={styles.text}>Điều 2.4 nêu trên. Trong mọi trường hợp, nếu có</Text>
              <Text style={styles.text}>tranh chấp về việc thực chương trình (bao gồm</Text>
              <Text style={styles.text}>nhưng không giới hạn việc xác định người chơi </Text>
              <Text style={styles.text}>chiến thắng theo bảng xếp hạng tuần, quy đổi</Text>
              <Text style={styles.text}>quà tặng hợp lệ), thì quyền quyết định cuối cùng</Text>
              <Text style={styles.text}>sẽ thuộc về SPVB.</Text>
              <Text style={styles.text}>SPVB cam kết thực hiện đúng và hoàn toàn chịu</Text>
              <Text style={styles.text}>trách nhiệm về chương trình trên theo các qui</Text>
              <Text style={styles.text}>định của pháp luật hiện hành. </Text>

              <Text style={styles.text}>Phù hợp với qui định của pháp luật, SPVB có</Text>
              <Text style={styles.text}>quyền chấm dứt hoặc huỷ chương trình này trong</Text>
              <Text style={styles.text}>trường hợp bất khả kháng và sẽ thông báo công</Text>
              <Text style={styles.text}>khai phù hợp với quy định pháp luật. </Text>
              <Text style={styles.text}>Nếu phát hiện có dấu hiệu gian lận, sử dụng công</Text>
              <Text style={styles.text}>cụ, phần mềm hỗ trợ, tài khoản của người chơi sẽ</Text>
              <Text style={styles.text}>bị khóa đến hết thời gian diễn ra chương trình,</Text>
              <Text style={styles.text}>mọi quà tặng sẽ bị thu hồi. </Text>
              <Text style={styles.text}>Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài</Text>
              <Text style={styles.text}>khoản với chúng tôi hoặc truy cập Nền tảng,</Text>
              <Text style={styles.text}>người chơi xác nhận và đồng ý rằng người chơi</Text>
              <Text style={styles.text}>chấp nhận các phương pháp, yêu cầu, và/hoặc</Text>
              <Text style={styles.text}>chính sách được mô tả trong Chính sách bảo mật</Text>
              <Text style={styles.text}>này, và theo đây bạn đồng ý cho phép chúng tôi</Text>
              <Text style={styles.text}>thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá</Text>
              <Text style={styles.text}>nhân của bạn cho mục đích thương mại.</Text>

              <View style={styles.Button}>
                <ButtonLogin
                  backgroundImage={BUTTON_BLUE}
                  titleStyle={styles.titleLogin}
                  title='Đã hiểu'
                  onPress={PureGift}
                />
              </View>

            </ImageBackground>

          </ScrollView>
          <Footer
            onPress_PureChart={goChart}
            onPress_PureCoin={goCoin}
            onPress_PureGift={goGift}
            onPress_PureMap={goMap}
            onPress_PureWorld={goWorld}
            onPressReport={() => navigation.navigate('ReportError')}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={false}>
          <View style={styles.boxNotifi}>
            <Pressable onPress={() => setShowPopupHappy(false)}>
              <Image source={{ uri: IMAGE_POPUP_HAPPY }} style={styles.imagePopupHappy} />
            </Pressable>
          </View>
        </Modal>

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
      </View>

    </Background>
   
  )
}



export default Rules

const styles = StyleSheet.create({
  Button: {
    width: Dimensions.get('screen').width * 0.5,
    height: Dimensions.get('screen').height * 0.07,
    marginTop: Dimensions.get('screen').height * 0.03,
    marginLeft: Dimensions.get('screen').width * 0.05,

  },
  titleLogin: {
    color: Colors.WHITE,
  },
  boxNotifi: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  imagePopupHappy: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.5
  },
  imagen: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.2,
    marginTop: - Dimensions.get('screen').height * 0.2,
    marginLeft: Dimensions.get('screen').width * 0.05,
    borderRadius: 10,

  },
  imaged: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.2,
    marginTop: - Dimensions.get('screen').height * 0.2,
    marginLeft: Dimensions.get('screen').width * 0.1,
    borderRadius: 10,

  },
  imagea: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.2,
    marginTop: - Dimensions.get('screen').height * 0.2,
    marginLeft: - Dimensions.get('screen').width * 0.42,
    borderRadius: 10,

  },
  imaget: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.2,
    marginTop: - Dimensions.get('screen').height * 0.2,
    marginLeft: Dimensions.get('screen').width * 0.05,
    borderRadius: 10,


  },
  image: {
    width: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.2,
    marginTop: - Dimensions.get('screen').height * 0.2,
    borderRadius: 10,
    marginLeft: Dimensions.get('screen').width * 0.02,

  },
  gr: {


    flexDirection: 'column',

  },
  textcard7: {
    color: Colors.GRAY_5,
    fontSize: 10,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: - Dimensions.get('screen').height * 0.02,


  },
  textcard6: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: Dimensions.get('screen').height * 0.2,


  },

  textcard5: {
    color: Colors.GRAY_5,
    fontSize: 10,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: - Dimensions.get('screen').height * 0.02,


  },
  textcard4: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: - Dimensions.get('screen').height * 0.02,


  },
  textcard3: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: Dimensions.get('screen').height * 0.2,


  },
  textcard2: {
    color: Colors.GRAY_5,
    fontSize: 10,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: - Dimensions.get('screen').height * 0.02,


  },
  textcard1: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: - Dimensions.get('screen').height * 0.02,


  },
  textcard: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 30,
    fontWeight: '700',
    marginLeft: - Dimensions.get('screen').width * 0.38,
    marginTop: Dimensions.get('screen').height * 0.2,


  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 8,
    borderColor: Colors.WHITE,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('screen').height * 0.45,

  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  text9: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '500',
    marginLeft: Dimensions.get('screen').width * 0.14,
    marginTop: - Dimensions.get('screen').height * 0.022,

  },
  text6: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '500',
    marginLeft: Dimensions.get('screen').width * 0.1,
    marginTop: - Dimensions.get('screen').height * 0.022,

  },
  text5: {
    color: Colors.BLACK,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '500',
    marginLeft: Dimensions.get('screen').width * 0.1,
    marginTop: - Dimensions.get('screen').height * 0.01,


  },
  text4: {
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '400',
    marginLeft: Dimensions.get('screen').width * 0.14,
    marginTop: - Dimensions.get('screen').height * 0.01,

  },
  text3: {
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '400',
    marginLeft: Dimensions.get('screen').width * 0.14,
    marginTop: - Dimensions.get('screen').height * 0.022,

  },
  text2: {
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '400',
    marginLeft: Dimensions.get('screen').width * 0.1,
    marginTop: - Dimensions.get('screen').height * 0.022,

  },
  text1: {
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '400',
    marginLeft: Dimensions.get('screen').width * 0.1,


  },
  text: {
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '400',
    marginLeft: Dimensions.get('screen').width * 0.1,
    marginTop: - Dimensions.get('screen').height * 0.022,


  },
  textTitlec: {
    marginLeft: Dimensions.get('screen').width * 0.05,
    fontSize: 13,
    fontWeight: '900',
    lineHeight: 24,
    color: Colors.BLACK,


  },
  textTitleb: {
    marginLeft: Dimensions.get('screen').width * 0.05,
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 24,
    color: Colors.BLACK,


  },
  des2: {
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '400',
    marginLeft: Dimensions.get('screen').width * 0.05,
    marginTop: - Dimensions.get('screen').height * 0.022,
  },
  des1: {
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    fontWeight: '400',
    marginLeft: Dimensions.get('screen').width * 0.05,


  },
  des: {
    textAlign: 'center',
    width: '100%',
    color: Colors.GRAY_5,
    fontSize: 13,
    lineHeight: 36,
    marginBottom: '5%',
    fontWeight: '400'
  },

  container: {
    flex: 1,
  },
  boxBanner: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.BG_SCREEN,
  },
  imageBottleAquafina: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 1,
    marginTop: Dimensions.get('screen').height * 0.02,


  },
  imageBottleAquafina1: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.7,
    marginTop: Dimensions.get('screen').height * 0.1,


  },
  imageBottleAquafina2: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 1,
    marginTop: Dimensions.get('screen').height * 0.02,


  },
  imageBottleAquafina3: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 1.2,
    marginTop: - Dimensions.get('screen').height * 0.08,


  },
  imageBottleAquafina4: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 1.2,
    marginTop: Dimensions.get('screen').height * 0.02,


  },
  textTitle: {
    marginLeft: Dimensions.get('screen').width * 0.05,
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 24,
    color: Colors.BLACK,
    marginTop: Dimensions.get('screen').height * 0.022,
  },
  textTitle1: {
    marginLeft: Dimensions.get('screen').width * 0.05,
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 24,
    color: Colors.BLUE_KV,


  },

})