import Toast from "react-native-toast-message";

export function showToast(message: string, duration: number = 3000,type = 'default') {//success,error,warning,default
    Toast.show({
        text1: message,
        visibilityTime: duration,
        type: type,
        position: 'bottom',
    });
}