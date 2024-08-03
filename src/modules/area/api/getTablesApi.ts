import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";

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
      Method: '0', // Custom header for Method
    };
  
    return await axiosInstance.get<TablesResponse>('/tables', { params, headers });
  };

  