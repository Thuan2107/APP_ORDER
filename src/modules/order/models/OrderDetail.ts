import { FoodOrderDetail } from "./FoodOrderDetail";

class OrderBuffetTicket {
  id: number = 0;
  restaurant_id: number = 0;
  restaurant_brand_id: number = 0;
  branch_id: number = 0;
  order_id: number = 0;
  buffet_ticket_id: number = 0;
  buffet_ticket_name: string = "";
  cash_amount: number = 0;
  bank_amount: number = 0;
  transfer_amount: number = 0;
  e_wallet_amount: number = 0;
  adult_quantity: number = 0;
  child_quantity: number = 0;
  adult_price: number = 0;
  child_price: number = 0;
  total_adult_amount: number = 0;
  total_child_amount: number = 0;
  vat_amount: number = 0;
  vat_percent: number = 0.0;
  total_final_amount: number = 0;
  status: number = 0;
  adult_discount_percent: number = 0;
  adult_discount_amount: number = 0;
  child_discount_percent: number = 0;
  child_discount_amount: number = 0;
  adult_discount_price: number = 0;
  child_discount_price: number = 0;

  constructor(data: Partial<OrderBuffetTicket> = {}) {
    Object.assign(this, data);
  }
}

export class OrderDetail {
  id: number = 0;
  note: string = "";
  discountPrcent: number = 0;
  order_id_server: number = 0;
  customer_id: number = 0;
  customer_name: string = "";
  customer_phone: string = "";
  customer_address: string = "";
  shipping_receiver_name: string = "";
  shipping_phone: string = "";
  shipping_address: string = "";
  shipping_lat: string = "";
  shipping_lng: string = "";
  shipping_fee: number = 0;
  area_id: number = 0;
  table_id: number = 0;
  table_name: string = "";
  employee_name: string = "";
  branch_address: string = "";
  created_at: string = "";
  status: number = 0;
  amount: number = 0;
  vat_amount: number = 0;
  discount_type: number = 0;
  discount_type_name: string = "";
  discount_percent: number = 0;
  discount_amount: number = 0;
  total_amount: number = 0;
  total_final_amount: number = 0;
  total_point: number = 0;
  extra_charge_amount: number = 0;
  customer_slot_number: number = 0;
  is_allow_request_payment: number = 0;
  is_share_point: number = 0;
  is_online: number = 0;
  is_promotion: number = 0;
  is_apply_vat: number = 0;
  total_order_detail_customer_request: number = 0;
  restaurant_voucher_discount_percent: number = 0;
  restaurant_voucher_discount_amount: number = 0;
  employee_target_revenue_per_customer: number = 0;
  order_details: FoodOrderDetail[] = [];
  order_promotion: any[] = [];
  booking_deposit_amount: number = 0;
  membership_point_used: number = 0;
  membership_accumulate_point_used: number = 0;
  membership_promotion_point_used: number = 0;
  membership_alo_point_used: number = 0;
  membership_value_point_used: number = 0;
  membership_total_point_used: number = 0;
  membership_total_point_used_amount: number = 0;
  employee_give_qrcode_fullname: string = "";
  employee_give_qrcode_id: number = 0;
  payment_date: string = "";
  is_allow_review: number = 0;
  restaurant_brand_phone: string = "";
  branch_phone: string = "";
  booking_status: number = 0;
  table_merging_ids: number[] = [];
  table_merging_names: string[] = [];
  total_amount_subtract_extra_charge_amount: number = 0;
  order_customer_beer_inventory_quantity: number = 0;
  membership_point_used_amount: number = 0;
  membership_accumulate_point_used_amount: number = 0;
  membership_promotion_point_used_amount: number = 0;
  membership_alo_point_used_amount: number = 0;
  membership_value_point_used_amount: number = 0;
  wireless_call_system_number: number = 0;
  restaurant_order_channel_id: number = 0;
  restaurant_channel_fee_percent: number = 0;
  restaurant_channel_fee_amount: number = 0;
  restaurant_order_channel_name: string = "";
  food_discount_percent: number = 0;
  drink_discount_percent: number = 0;
  total_amount_discount_percent: number = 0;
  total_amount_extra_charge_percent: number = 0;
  food_discount_amount: number = 0;
  drink_discount_amount: number = 0;
  total_amount_discount_amount: number = 0;
  total_amount_extra_charge_amount: number = 0;
  service_charge_percent: number = 0;
  service_charge_amount: number = 0;
  total_amount_extra_charge_vat_percent: number = 0;
  total_amount_extra_charge_vat_amount: number = 0;
  service_charge_vat_percent: number = 0;
  service_charge_vat_amount: number = 0;
  order_method: number = 0;
  cash_amount: number = 0;
  bank_amount: number = 0;
  transfer_amount: number = 0;
  wallet_amount: number = 0;
  tip_amount: number = 0;
  order_buffet_ticket: OrderBuffetTicket = new OrderBuffetTicket();
  third_party_delivery_name: string = "";
  channel_order_food_code: string = "";

  constructor(data: Partial<OrderDetail> = {}) {
    Object.assign(this, data);
  }
}