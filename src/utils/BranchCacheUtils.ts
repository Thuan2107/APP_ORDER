import { MMKV } from "react-native-mmkv";
import { Branch } from "../models/BranchModel";

export class BranchCache {
    private storage = new MMKV();

    getBranchCache(): Branch {
        const branchJson = this.storage.getString('branchCache');
        return branchJson ? JSON.parse(branchJson) as Branch : new Branch();
    }

    setBranchCache(branch: Branch) {
        this.storage.set('branchCache', JSON.stringify(branch));
    }
}

