import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type LoginProps = {
};
type RegisterProps = {
};
type RegisterOTPProps = {
    phone: string,
};

type LoginOTPProps = {
    phone: string,
};

type  RegisterSuccessProps = {
};



export type AuthenStackParamList = {
    LogIn: LoginProps | undefined; 
    Register: RegisterProps | undefined;
    LoginOTP: LoginOTPProps | undefined;
    RegisterOTP: RegisterOTPProps | undefined;
    RegisterSuccess: RegisterSuccessProps | undefined;
};

export type AuthenStackNavigation = StackNavigationProp<AuthenStackParamList>;

export type S = keyof AuthenStackParamList;

export type AuthenStackScreenProps<RouterName extends S> = StackScreenProps<
    AuthenStackParamList,
    RouterName
>;