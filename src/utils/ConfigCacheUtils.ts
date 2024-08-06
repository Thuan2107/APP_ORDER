import { MMKV } from "react-native-mmkv";
import { Config } from "../models/ConfigModel";

const storage = new MMKV();

export class ConfigCache {
    getConfig(): Config {
        const configJson = storage.getString('configCache');
        return configJson ? JSON.parse(configJson) as Config : new Config();
    }

    setConfig(config: Config) {
        storage.set('configCache', JSON.stringify(config));
    }
}

export const updateUserProperty = (key: keyof Config, value: any) => {
    // Lấy chuỗi JSON từ MMKV
    const configString = storage.getString('configCache');

    // Kiểm tra nếu giá trị tồn tại
    if (configString) {
        // Giải tuần tự hóa chuỗi JSON thành đối tượng
        let config = JSON.parse(configString);

        // Cập nhật giá trị của thuộc tính
        config[key] = value;

        // Tuần tự hóa lại đối tượng thành chuỗi JSON
        const updatedUserString = JSON.stringify(config);

        // Lưu chuỗi JSON đã cập nhật vào MMKV
        storage.set('configCache', updatedUserString);
    } else {
        console.log('No user found');
    }
};

