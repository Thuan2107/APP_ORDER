import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import { ApiOauthRouters } from '../../../routers/api-oauth-router';
import { Setting } from "../../../models/SettingModel";


export class GetSettingParams {
  branch_id: number = 0
  restaurant_brand_id: number = 0
}

export const getEmployessSetting = async (params : GetSettingParams): Promise<AxiosResponse<Setting>> => {
  const headers = {
    Method: '0', // Custom header for Method
    ProjectId: "8003"
  };
  return await axiosInstance.get<Setting>(ApiOauthRouters.API_GET_SETTING, { params,headers });
};