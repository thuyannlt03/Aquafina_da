
import { DrawerNavigationProp, DrawerScreenProps } from "@react-navigation/drawer";

type HomeProps = {};

type PureWorldProps = {};

type PureGiftProps = {};

type PureMapProps = {};

type PureCoinProps = {};

type PureChartProps = {};

type LoginProps = {};

type RegisterProps = {};

type RegisterOTPProps = {
    phone: string,
};

type LoginOTPProps = {
    phone: string,
};

type  RegisterSuccessProps = {
};



type RuleProps = {};

export type HomeDrawerParamList = {
    Home: HomeProps | undefined,
    PureWorld: PureWorldProps | undefined,
    PureGift: PureGiftProps | undefined,
    PureMap: PureMapProps | undefined,
    PureCoin: PureCoinProps | undefined,
    PureChart: PureChartProps | undefined
    LogIn: LoginProps | undefined;
    Register: RegisterProps | undefined;
    LoginOTP: LoginOTPProps | undefined;
    RegisterOTP: RegisterOTPProps | undefined;
    RegisterSuccess: RegisterSuccessProps | undefined;
    Rule: RuleProps | undefined;
};

export type HomeDrawerNavigation = DrawerNavigationProp<HomeDrawerParamList>;

export type S = keyof HomeDrawerParamList;

export type HomeDrawerScreenProps<RouterName extends S> = DrawerScreenProps<
    HomeDrawerParamList,
    RouterName
>;