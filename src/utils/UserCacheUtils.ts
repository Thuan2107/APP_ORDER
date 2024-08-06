import { MMKV } from "react-native-mmkv";
import { User } from "../models/UserModel";

export class UserCache {
    private storage = new MMKV();

    getUserCache(): User {
        const userJson = this.storage.getString('userCache');
        return userJson ? JSON.parse(userJson) as User : new User();
    }

    setUserCache(user: User) {
        this.storage.set('userCache', JSON.stringify(user));
    }
}

