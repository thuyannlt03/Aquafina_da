import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type LoginProps = {
};

type RegisterOTPProps = {
    phone: string,
};

type LoginOTPProps = {
    phone: string,
};
type RegisterProps = {
};

export type AuthenStackParamList = {
    LogIn: LoginProps | undefined; 
    LoginOTP: LoginOTPProps | undefined;
    Register: RegisterProps | undefined;
    RegisterOTP: RegisterOTPProps | undefined;
};

export type AuthenStackNavigation = StackNavigationProp<AuthenStackParamList>;

export type S = keyof AuthenStackParamList;

export type AuthenStackScreenProps<RouterName extends S> = StackScreenProps<
    AuthenStackParamList,
    RouterName
>;