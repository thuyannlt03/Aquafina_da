import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type LoginProps = {
};
type RegisterProps = {
};
type SendOTPProps = {}



export type AuthenStackParamList = {
    LogIn: LoginProps | undefined; 
    Register: RegisterProps | undefined;
    SendOTP: SendOTPProps | undefined;
    
};

export type AuthenStackNavigation = StackNavigationProp<AuthenStackParamList>;

export type S = keyof AuthenStackParamList;

export type AuthenStackScreenProps<RouterName extends S> = StackScreenProps<
    AuthenStackParamList,
    RouterName
>;