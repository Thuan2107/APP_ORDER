import React, { useEffect, useState } from "react"
import { FlatList, View, StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions } from "react-native"
import ImageLogin from '../../../../assets/background.svg'
import TechresLogo from '../../../../assets/techres-logo.svg'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ConfigParams, getConfig } from "../api/getConfigApi";
import { getSession } from "../api/getSessionApi";
import { MMKV } from "react-native-mmkv";
import { RegisterDevice, registerDevice } from "../api/registerDeviceApi";
import { APP_CONSTANTS } from "../../../constants/app_constants"
import DeviceInfo from "react-native-device-info";
import { Login, User, login } from "../api/loginApi";
import { Buffer } from 'buffer';
import { Branch } from "../../../models/BranchModel";
import { GetSettingParams, getEmployessSetting } from "../api/getEmployeeSetting";
import { ConfigCache, updateUserProperty } from "../../../utils/ConfigCacheUtils";
import { SettingCache, SettingUtils } from "../../../utils/SettingCacheUtils";
import { PermissionUtils } from '../../../utils/PermissionUtils';
import { Setting } from "../../../models/SettingModel";
import { UserCache } from "../../../utils/UserCacheUtils";
import { BranchCache } from "../../../utils/BranchCacheUtils";
import { getAllBranch } from "../api/getAllBranchApi";
import { getSettingBranch } from "../api/getSettingBranchApi";
const { width, height } = Dimensions.get('window');

interface ConfigResponse {
    realtime_domain: string;
    api_key: string;
    restaurant_name: string;
    api_upload: string;
    api_upload_short: string;
    api_oauth_node: string;
    session: string;
    socket_conect_login: string;
    api_chat_tms?: string;
}

const LoginPages = () => {

    const [brand, setBrand] = useState('');
    const [account, setAccount] = useState('');
    const storage = new MMKV();
    const [deviceName, setDeviceName] = useState('');
    const [user, setUser] = useState(new User)

    useEffect(() => {
        DeviceInfo.getDeviceName().then(name => {
            setDeviceName(name);
        });
    }, []);
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
            apiGetSession()
            const configString = JSON.stringify(response.data);  // Khởi tạo cache
            storage.set('configCache', configString); // Set dữ liệu cho cache
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }

    const apiGetSession = async () => {
        try {
            const response = await getSession();
            console.log(response.data);
            const configCache = storage.getString('configCache');
            // Kiểm tra nếu giá trị tồn tại
            if (configCache) {
                // Giải tuần tự hóa chuỗi JSON thành đối tượng
                const config = JSON.parse(configCache);
                console.log(config);
                updateUserProperty("session", response.data) // Update dữ liệu cho cache
                apiRegisterDevice()
            } else {
                console.log('No user found');
            }
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }

    const apiRegisterDevice = async () => {
        try {
            const registerDeviceBody = new RegisterDevice(APP_CONSTANTS.os_name, deviceName, "");
            const response = await registerDevice(registerDeviceBody);
            console.log(response.data);
            loginApi()
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }

    const loginApi = async () => {
        try {
            const base64Encoded = Buffer.from(password, 'utf8').toString('base64');
            const loginBody = new Login(account, base64Encoded, deviceName, "");

            var userData = new User();
            const response = await login(loginBody);
            console.log(response.data);
            userData = response.data;

            userData.restaurantName = brand;
            userData.username = account;
            userData.password = password;

            const userString = JSON.stringify(userData);
            storage.set('userCache', userString);
            setUser(userData);

            var branchData = new Branch();
            branchData.address = userData.branchAddress;
            branchData.id = userData.branchId;
            branchData.name = userData.branchName;

            const branchString = JSON.stringify(branchData);
            storage.set('branchCache', branchString);
            getSettingL1Api()
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }

    const getSettingL1Api = async () => {
        try {
            const params: GetSettingParams = {
                branch_id: user.branchId,
                restaurant_brand_id: user.restaurantBrandId
            };
            const response = await getEmployessSetting(params);
            checkGPBH(response.data)
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }

    const getSettingL2Api = async (restaurantBrandId: number, branchId: number) => {
        try {
            const params: GetSettingParams = {
                branch_id: branchId,
                restaurant_brand_id: restaurantBrandId
            };
            const response = await getEmployessSetting(params);
            checkGPBH(response.data)
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }



    const getAllBranchApi = async () => {
        try {

            const response = await getAllBranch();
            if (response.data.length > 0) {
                if (PermissionUtils.checkOwner() || PermissionUtils.checkBrandManager() || PermissionUtils.checkGeneralManager() || PermissionUtils.checkViewAll()) {
                    const user = new UserCache().getUserCache()
                    user.brandLogo = response.data[0].imageLogo;
                    user.branchId = response.data[0].id;
                    user.restaurantBrandId = response.data[0].restaurantBrandId;
                    user.isShowDialogChooseBranch = true;
                    const userCache = new UserCache();
                    userCache.setUserCache(user);

                    const branch = new BranchCache().getBranchCache()
                    branch.restaurantBrandId = response.data[0].restaurantBrandId;
                    branch.address = response.data[0].address;
                    branch.id = response.data[0].id;
                    branch.name = response.data[0].name;
                    branch.phone = response.data[0].phone;
                    const branchCache = new BranchCache();
                    branchCache.setBranchCache(branch);
                    getSettingL2Api(response.data[0].restaurantBrandId, response.data[0].id)
                } else {
                    if (response.data.length > 1) {
                        const user = new UserCache().getUserCache()
                        user.brandLogo = response.data[0].imageLogo;
                        user.branchId = response.data[0].id;
                        user.restaurantBrandId = response.data[0].restaurantBrandId;
                        const userCache = new UserCache();
                        userCache.setUserCache(user);

                        const branch = new BranchCache().getBranchCache()
                        branch.restaurantBrandId = response.data[0].restaurantBrandId;
                        branch.address = response.data[0].address;
                        branch.id = response.data[0].id;
                        branch.name = response.data[0].name;
                        branch.phone = response.data[0].phone;
                        const branchCache = new BranchCache();
                        branchCache.setBranchCache(branch);
                        getSettingL2Api(response.data[0].restaurantBrandId, response.data[0].id)


                    }else{

                    }
                }
            }
            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }

    const gotoHome = async()=> {
        // const config = new ConfigCache().getConfig()
        // if (config.socketConectLogin != "") {
        //     val opts = IO.Options()
        //     opts.reconnection = true
        //     opts.transports = arrayOf(Polling.NAME, PollingXHR.NAME, WebSocket.NAME)
        //     TechResApplication.socketLogOut =
        //         IO.socket(ConfigCache().getConfig().realtimeDomain, opts).connect()
        // }
        // //Kiểm tra nếu đường dẫn rỗng hoặc không có http
        // if (ConfigCache().getConfig().realtimeDomain != "") {
        //     val map: MutableMap<String, String> = mutableMapOf()
        //     map["token"] = CurrentUser().getToken()

        //     val options = IO.Options.builder()
        //         .setReconnection(true)
        //         .setAuth(map)
        //         .setTransports(arrayOf(Polling.NAME, WebSocket.NAME, PollingXHR.NAME))
        //         .build()
        //     TechResApplication.socket = IO.socket(
        //         String.format(
        //             "%s/restaurants_%s_branches_%s",
        //             ConfigCache().getConfig().realtimeDomain,
        //             CurrentUser().getUserInfo().restaurantId,
        //             CurrentUser().getUserInfo().branchId
        //         ), options
        //     ).connect()
        // }
        getSettingBranchApi()
        if (SettingUtils.checkBranchTypeMedium() || SettingUtils.checkBranchTypeLarge()) {
            getSettingBrand()
        }

    }

    const getSettingBranchApi = async ()=>{
        try {
            const params: GetSettingParams = {
                branch_id: user.branchId,
                restaurant_brand_id: user.restaurantBrandId
            };
            const response = await getSettingBranch();
          const settingCache =  SettingCache.getSetting();
          const data = response.data
          settingCache.isWorkingOffline = data.isWorkingOffline
          settingCache.isAllowAdvert = data.isAllowAdvert
          settingCache.isEnableBooking = data.isEnableBooking
          settingCache.isEnableFishBowl = data.isEnableFishBowl
          settingCache.isWirelessCallSystem = data.isWirelessCallSystem
          settingCache.wirelessCallSystemTotal = data.wirelessCallSystemTotal
          settingCache.isEnableStamp = data.isEnableStamp
          settingCache.isHaveTakeAway = data.isHaveTakeAway
          settingCache.isApplyOnlyCashAmountPaymentMethod = data.isApplyOnlyCashAmountPaymentMethod
          settingCache.serviceChargePercent = data.serviceChargePercent
          settingCache.serviceChargeAmount = data.serviceChargeAmount
          settingCache.serviceChargeUseType = data.serviceChargeUseType
          settingCache.isEnableSendToKitchenRequest = data.isEnableSendToKitchenRequest
          settingCache.isEnableFoodCourt = data.isEnableFoodCourt
          settingCache.isEnableCheckIn = data.isEnableCheckIn
          settingCache.vatContentOnBill = data.vatContentOnBill
          settingCache.greetingContentOnBill = data.greetingContentOnBill

          

            return response.data;
        } catch (error) {
            console.error(error); // Handle the error
        }
    }




    const checkGPBH = async (setting: Setting) => {
        if (SettingUtils.checkBranchTypeMedium() || SettingUtils.checkBranchTypeLarge()) {
            if (PermissionUtils.checkOwner() || PermissionUtils.checkBrandManager() || PermissionUtils.checkGeneralManager() || PermissionUtils.checkViewAll()) {
                getAllBranchApi()
            } else {
                if (SettingUtils.checkBranchTypeMediumOptionThree()) {

                } else {
                    if (!PermissionUtils.checkOrderFood()) {

                    } else {
                        const userCache = new UserCache();
                        var branch = new Branch();
                        branch.address = setting.branchInfo.address
                        branch.id = setting.branchInfo.id
                        branch.name = setting.branchInfo.name
                        branch.phone = setting.branchInfo.phone
                        branch.restaurantBrandId = userCache.getUserCache().restaurantBrandId
                        const branchCache = new BranchCache();
                        branchCache.setBranchCache(branch)

                        const userCacheData = userCache.getUserCache();
                        userCacheData.brandLogo = setting.branchInfo.imageLogoUrl
                        userCacheData.isShowDialogChooseBranch = false
                        userCache.setUserCache(userCacheData)
                        getAllBranchApi()
                    }
                }
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
}
export default LoginPages