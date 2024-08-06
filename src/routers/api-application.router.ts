import { UserCache } from "../utils/UserCacheUtils";

const VERSION = "v11"
const userCache = new UserCache();
const branchId = userCache.getUserCache().branchId;
export const ApiApplicationRouters = {
    API_GET_ALL_BRANCH: `api/${VERSION}/branches`,
    API_GET_SETTING_BRANCH : `api/${VERSION}/branches/${branchId}/setting/is-apply-only-cash-amount`
};

