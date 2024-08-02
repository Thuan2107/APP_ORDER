export class FoodOrderDetail {
  id: number = 0;
  name: string = '';
  price: number = 0;
  quantity: number = 0;
  status: number = 0;
  note: string = '';
  categoryTypeEnum: string = '';
  order_id: number = 0;
  restaurant_extra_charge_id: number = 0;
  restaurant_kitchen_place_id: number = 0;
  food_id: number = 0;
  food_avatar: string = '';
  table_id: number = 0;
  table_name: string = '';
  employee_name: string = '';
  printed_quantity: number = 0;
  food_in_combo_wait_print_quantity: number = 0;
  vat_percent: number = 0;
  vat_amount: number = 0;
  total_price: number = 0;
  purchase_point: number = 0;
  total_price_include_addition_foods: number = 0;
  category_type: number = 0;
  category_type_name: string = '';
  category_name: string = '';
  drink_or_other_food: number = 0;
  is_gift: number = 0;
  is_bbq: number = 0;
  is_combo: number = 0;
  is_cook_on_table: number = 0;
  status_text: string = '';
  enable_return_beer: number = 0;
  review_score: number = 0;
  is_sell_by_weight: number = 0;
  cancel_reason: string = '';
  is_extra_charge: number = 0;
  is_printed: number = 0;
  is_allow_review: number = 0;
  is_purchase_by_point: number = 0;
  is_not_allow_request_payment: number = 0;
  restaurant_promotion_id: number = 0;
  time_to_completed: number = 0;
  move_from_table_name: string[] = [];
  is_allow_print: number = 0;
  created_at: string = '';
  updated_at: string = '';
  return_quantity_for_drink: number = 0;
  move_from_list_table_name: string[] = [];
  food_notes: string[] = [];
  order_detail_additions: any[] = [];
  order_detail_combo: any[] = [];
  order_detail_restaurant_pc_foods: any[] = [];
  order_detail_restaurant_promotion_campaign_foods: any[] = [];
  is_allow_print_stamp: number = 0;
  order_detail_combo_parent_id: number = 0;
  discount_percent: number = 0;
  discount_amount: number = 0;
  discount_price: number = 0;
  service_start_time: string = '';
  service_end_time: string = '';
  service_time_used: number = 0;
  block_price: number = 0;
  time_per_block: number = 0;
  time_block_price: number = 0;
  is_enable_block: number = 0;
  is_send_to_kitchen: number = 0;
  wireless_call_system_number: number = 0;
  order_buffet_ticket_id: number = 0;
  order_method: number = 0;
  channel_order_food_code: string = '';
  approved_drink: number = 0;

  constructor(data: Partial<FoodOrderDetail>) {
    Object.assign(this, data);
  }
}
