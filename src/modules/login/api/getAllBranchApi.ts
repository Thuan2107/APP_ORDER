import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import { ApiOauthRouters } from '../../../routers/api-oauth-router';
import { ApiApplicationRouters } from "../../../routers/api-application.router";
import { BranchData } from "../../../models/BranchDataModel";


class AllBranchParams {
  restaurant_brand_id: number = -1;
  isOffice: number = 0;
}

export const getAllBranch = async (): Promise<AxiosResponse<BranchData[]>> => {
  const params = new AllBranchParams();
  const headers = {
    Method: '0', // Custom header for Method
    ProjectId: "8011"
  };

  return await axiosInstance.get<BranchData[]>(ApiApplicationRouters.API_GET_ALL_BRANCH, { params, headers });
};