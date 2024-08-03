import React, { useState } from "react"
import { FlatList, View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions } from "react-native"
import ImageLogin from '../../../../assets/background.svg'
import TechresLogo from '../../../../assets/techres-logo.svg'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axiosInstance from "../../../utils/axiosInstance";
import { ConfigParams, getConfig } from "../api/getConfigApi";
import { setAuthToken, setProjectId } from "../../../utils/config";
const { width, height } = Dimensions.get('window');
const LoginPages = () => {

    const [brand, setBrand] = useState('');
    const [account, setAccount] = useState('');
    // State variable to hold the password
    const [password, setPassword] = useState('');

    // State variable to track password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async () => {
        apiGetConfig()
    };
  
    const apiGetConfig = async () => {
        
        const params: ConfigParams = {
            project_id: "net.techres.order.api",
            restaurant_name: brand,
        };

        try {
            const response = await getConfig(params);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }



    return (
        <View style={styles.container}>
            <ImageLogin width={width} height={height} style={styles.background} />
            <View style={styles.content}>
                <TechresLogo style={styles.logo} />
                {/* <Image source={ImageLogin} style={styles.logo} /> Đường dẫn đến logo */}
                <TextInput style={styles.inputBrand}
                    onChangeText={setBrand}
                    placeholder="Thương hiệu" />
                <TextInput
                    style={styles.inputUserName}
                    onChangeText={setAccount}
                    placeholder="Tài khoản"
                />
                <View style={styles.containerPassword}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholder="Mật khẩu"
                        placeholderTextColor="#aaa"
                    />
                    <MaterialCommunityIcons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="#aaa"
                        style={styles.icon}
                        onPress={toggleShowPassword}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleSubmit}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Bạn quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 32,
    },
    input: {
        flex: 1,
        color: '#333',
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
    },
    inputUserName: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    inputBrand: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 16,

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    forgotPassword: {
        color: '#007bff',
        marginBottom: 32,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    icon: {
        marginLeft: 10,
    },
    eyeIcon: {
        marginLeft: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    containerPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 14,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16
    }
});
export default LoginPages