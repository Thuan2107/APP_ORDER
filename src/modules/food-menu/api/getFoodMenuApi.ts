import { AxiosResponse } from "axios";
import { Food } from "../models/FoodModel";
import axiosInstance from "../../../utils/axiosInstance";

interface MenuResponse {
    status: number;
    message: string;
    data: {
      limit: number;
      total_record: number;
      list: Food[];
    };
}

export interface MenuRequestParams {
    key_search: string;
    category_id: number;
    branch_id: number;
    is_allow_employee_gift: number;
    is_get_restaurant_kitchen_place: number;
    limit: number;
    category_type: number;
    is_out_stock: number;
    page: number;
    area_id: number;
    status: number;
  }

export const getMenu = async (params: MenuRequestParams): Promise<AxiosResponse<MenuResponse>> => {
  
    const headers = {
      Method: '0', // Custom header for Method
    };
  
    return await axiosInstance.get<MenuResponse>('/foods/menu', { params, headers });
  };