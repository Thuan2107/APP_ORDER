import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import { FoodOrderDetail } from "../../order/models/FoodOrderDetail";

interface AddFoodResponse {
    status: number;
    message: string;
    data: {
      order_id: number;
      order_details: FoodOrderDetail;
    };
}

export interface FoodModelToAdd {
  food_name: string;
  note: string;
  buy_one_get_one_foods: any[]; 
  quantity: number;
  is_allow_print: number;
  restaurant_kitchen_place_id: number;
  addition_foods: FoodOrderDetail[]; 
  is_gift: number;
  restaurant_vat_config_id: number;
  price: number;
  name: string;
  id: number;
  discount_percent: number;
}

interface AddFoodRequestBody {
  foods: FoodModelToAdd[];
  branch_id: number;
}

export const getMenu = async (orderId: number, body: AddFoodRequestBody): Promise<AxiosResponse<AddFoodResponse>> => {
    const url = `/orders/${orderId}/add-food`
    const headers = {
      Method: '1', // Custom header for Method
    };
  
    return await axiosInstance.post<AddFoodResponse>(url, { body, headers} );
  };