import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import { ApiApplicationRouters } from "../../../routers/api-application.router";
import { SettingBranchData } from "../../../models/SettingBranchDataModel";




export const getSettingBranch = async (): Promise<AxiosResponse<SettingBranchData>> => {

  const headers = {
    Method: '0', // Custom header for Method
    ProjectId: "8011"
  };

  return await axiosInstance.get<SettingBranchData>(ApiApplicationRouters.API_GET_SETTING_BRANCH, {headers});
};