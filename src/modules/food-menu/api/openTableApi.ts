import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";

interface OpenTableResponse {
    status: number;
    message: string;
    data: {
      id: number;
      name: string;
      status: number;
      order_id: number;
      status_text: string
    };
}

export interface OpenTableBody {
  branch_id: number;
}

export const openTableApi = async (tableId: number, body: OpenTableBody): Promise<AxiosResponse<OpenTableResponse>> => {
    const url = `/tables/${tableId}/open`

    const headers = {
      Method: '1', // Custom header for Method
      ProjectId: 8005
    };
  
    return await axiosInstance.post<OpenTableResponse>(url, body, {headers} );
  };