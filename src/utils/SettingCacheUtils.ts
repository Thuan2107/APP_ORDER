import { MMKV } from 'react-native-mmkv';
import { Setting } from '../models/SettingModel';

export class SettingCache {
    private static storage = new MMKV();

    static getSetting(): Setting {
        const settingJson = this.storage.getString('settingCache');
        return settingJson ? JSON.parse(settingJson) as Setting : new Setting();
    }

    static setSetting(setting: Setting) {
        this.storage.set('settingCache', JSON.stringify(setting));
    }
}

interface BranchTypeLevelConstants {
    BRANCH_TYPE_LEVEL_SMALL: number;
    BRANCH_TYPE_LEVEL_MEDIUM: number;
    BRANCH_TYPE_LEVEL_LARGE: number;
    BRANCH_OPTION_TYPE_ONE: number;
    BRANCH_OPTION_TYPE_TWO: number;
    BRANCH_OPTION_TYPE_THREE: number;
}

const BranchTypeLevelConstants: BranchTypeLevelConstants = {
    BRANCH_TYPE_LEVEL_SMALL: 1,
    BRANCH_TYPE_LEVEL_MEDIUM: 2,
    BRANCH_TYPE_LEVEL_LARGE: 3,
    BRANCH_OPTION_TYPE_ONE: 1,
    BRANCH_OPTION_TYPE_TWO: 2,
    BRANCH_OPTION_TYPE_THREE: 3,
};



export class SettingUtils {
    static checkBranchTypeSmall(): boolean {
        return SettingCache.getSetting().branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_SMALL;
    }

    static checkBranchTypeMedium(): boolean {
        return SettingCache.getSetting().branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_MEDIUM;
    }

    static checkBranchTypeLarge(): boolean {
        return SettingCache.getSetting().branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_LARGE;
    }

    static checkBranchTypeSmallOptionOne(): boolean {
        const setting = SettingCache.getSetting();
        return setting.branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_SMALL &&
            setting.branchTypeOption === BranchTypeLevelConstants.BRANCH_OPTION_TYPE_ONE;
    }

    static checkBranchTypeSmallOptionTwo(): boolean {
        const setting = SettingCache.getSetting();
        return setting.branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_SMALL &&
            setting.branchTypeOption === BranchTypeLevelConstants.BRANCH_OPTION_TYPE_TWO;
    }

    static checkBranchTypeSmallOptionThree(): boolean {
        const setting = SettingCache.getSetting();
        return setting.branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_SMALL &&
            setting.branchTypeOption === BranchTypeLevelConstants.BRANCH_OPTION_TYPE_THREE;
    }

    static checkBranchTypeMediumOptionOne(): boolean {
        const setting = SettingCache.getSetting();
        return setting.branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_MEDIUM &&
            setting.branchTypeOption === BranchTypeLevelConstants.BRANCH_OPTION_TYPE_ONE;
    }

    static checkBranchTypeMediumOptionTwo(): boolean {
        const setting = SettingCache.getSetting();
        return setting.branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_MEDIUM &&
            setting.branchTypeOption === BranchTypeLevelConstants.BRANCH_OPTION_TYPE_TWO;
    }

    static checkBranchTypeMediumOptionThree(): boolean {
        const setting = SettingCache.getSetting();
        return setting.branchType === BranchTypeLevelConstants.BRANCH_TYPE_LEVEL_MEDIUM &&
            setting.branchTypeOption === BranchTypeLevelConstants.BRANCH_OPTION_TYPE_THREE;
    }

    static checkTmsEnable(): boolean {
        return SettingCache.getSetting().serviceRestaurantLevelId > 1;
    }

    static checkRequireUpdateSlot(): boolean {
        const setting = SettingCache.getSetting();
        return setting.isRequireUpdateCustomerSlotInOrder === 1 && setting.serviceRestaurantLevelId > 2;
    }
}
