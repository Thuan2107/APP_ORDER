export class Order {
    id: number;
    note: string;
    restaurant_id: number;
    restaurant_brand_id: number;
    branch_id: number;
    area_id: number;
    customer_id: number;
    order_id_server: number;
    table_id: number;
    table_name: string;
    table_merged_names: string[];
    total_amount: number;
    created_at: string; // Consider using Date type if you parse it
    using_slot: number;
    using_time_minutes: number;
    using_time_minutes_string: string;
    order_status: number;
    is_share_point: number;
    is_online: number;
    is_take_away: number;
    is_return_deposit: number;
    total_order_detail_customer_request: number;
    booking_infor_id: number;
    branch_address: string;
    employee_target_revenue_per_customer: number;
    order_detail_pending_quantity: number;
  
    constructor(data: any) {
      this.id = data.id;
      this.note = data.note;
      this.restaurant_id = data.restaurant_id;
      this.restaurant_brand_id = data.restaurant_brand_id;
      this.branch_id = data.branch_id;
      this.area_id = data.area_id;
      this.customer_id = data.customer_id;
      this.order_id_server = data.order_id_server;
      this.table_id = data.table_id;
      this.table_name = data.table_name;
      this.table_merged_names = data.table_merged_names;
      this.total_amount = data.total_amount;
      this.created_at = data.created_at;
      this.using_slot = data.using_slot;
      this.using_time_minutes = data.using_time_minutes;
      this.using_time_minutes_string = data.using_time_minutes_string;
      this.order_status = data.order_status;
      this.is_share_point = data.is_share_point;
      this.is_online = data.is_online;
      this.is_take_away = data.is_take_away;
      this.is_return_deposit = data.is_return_deposit;
      this.total_order_detail_customer_request = data.total_order_detail_customer_request;
      this.booking_infor_id = data.booking_infor_id;
      this.branch_address = data.branch_address;
      this.employee_target_revenue_per_customer = data.employee_target_revenue_per_customer;
      this.order_detail_pending_quantity = data.order_detail_pending_quantity;
    }
  
    // You can add methods related to orders here if needed
  }
  