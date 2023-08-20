import { firebase } from "@react-native-firebase/database";

export const rtdb = firebase
.app()
.database('https://aquafina-8f8ce-default-rtdb.asia-southeast1.firebasedatabase.app/');