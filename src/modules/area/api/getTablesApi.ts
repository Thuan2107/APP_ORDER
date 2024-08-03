import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import { getAuthToken, getProjectId } from "../../../utils/config";

interface TablesResponse {
    status: number;
    message: string;
    data: TableModel[]
}

export interface TableRequestParams {
    area_id: number,
    branch_id: number,
    buffet_ticket_id: number,
  }


export const getTableApi = async (params: TableRequestParams): Promise<AxiosResponse<TablesResponse>> => {
    
    const headers = {
      Method: '0',
      ProjectId: 8005
    };
  
    return await axiosInstance.get<TablesResponse>('/tables', { params, headers });
  };

  