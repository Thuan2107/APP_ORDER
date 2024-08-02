class TableModel {
  id: number;
  name: string;
  status: number;
  area_id: number;
  order_id: number;
  area_name: string;
  table_merged_name: TableMergedName;
  merge_table_name: string;
  order_status: number;
  is_active: number;
  status_text: string;
  branch_id: number;
  branch_name: string;
  booking_time: string;
  is_not_alow_open: number;
  slot_number: number;
  is_take_away: number;
  waiting_booking_id: number;
  server_booking_id: number;

  constructor(
      id: number,
      name: string,
      status: number,
      area_id: number,
      order_id: number,
      area_name: string,
      table_merged_name: TableMergedName,
      merge_table_name: string,
      order_status: number,
      is_active: number,
      status_text: string,
      branch_id: number,
      branch_name: string,
      booking_time: string,
      is_not_alow_open: number,
      slot_number: number,
      is_take_away: number,
      waiting_booking_id: number,
      server_booking_id: number
  ) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.area_id = area_id;
      this.order_id = order_id;
      this.area_name = area_name;
      this.table_merged_name = table_merged_name;
      this.merge_table_name = merge_table_name;
      this.order_status = order_status;
      this.is_active = is_active;
      this.status_text = status_text;
      this.branch_id = branch_id;
      this.branch_name = branch_name;
      this.booking_time = booking_time;
      this.is_not_alow_open = is_not_alow_open;
      this.slot_number = slot_number;
      this.is_take_away = is_take_away;
      this.waiting_booking_id = waiting_booking_id;
      this.server_booking_id = server_booking_id;
  }
}

type TableMergedName = string[];