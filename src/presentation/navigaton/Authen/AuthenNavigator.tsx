import { createStackNavigator } from "@react-navigation/stack";
import { AuthenStackParamList } from "../stack/AuthenNavigation";
import Login from "../../container/Authen/Login";
import Register from "../../container/Authen/Register";
import LoginOTP from "../../container/Authen/LoginOTP";
import RegisterOTP from "../../container/Authen/RegisterOTP";

const Stack = createStackNavigator<AuthenStackParamList>();

export const AuthenNavigator =() => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LogIn' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='LoginOTP' component={LoginOTP} />
            <Stack.Screen name='RegisterOTP' component={RegisterOTP} />
        </Stack.Navigator>
    )
}