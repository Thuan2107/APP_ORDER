import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import  {ApiOauthRouters}  from '../../../routers/api-oauth-router';
import { APP_CONSTANTS } from "../../../constants/app_constants"
import { User } from "../../../models/UserModel";



export class Login {
  user_name: string;
  password: string;
  deviceUID: string;
  push_token : string;
  os_name: string;
  app_type: number;
 

  constructor(user_name: string, password: string, deviceUID: string,push_token : string,os_name : string = APP_CONSTANTS.os_name, app_type: number = 11) {
    this.user_name = user_name;
    this.password = password;
    this.deviceUID = deviceUID;
    this.push_token = push_token;
    this.app_type = app_type;
    this.os_name = os_name;
  }
}



  
export const login = async (body : Login): Promise<AxiosResponse<User>> => {
    const headers = {
      ProjectId : "8003"
    };
    return await axiosInstance.post<User>(ApiOauthRouters.API_LOGIN, { headers,body });
  };

export { User };
