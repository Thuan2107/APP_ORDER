export class Food {
    id: number = 0;
    restaurant_id: number = 0;
    restaurant_brand_id: number = 0;
    branch_id: number = 0;
    restaurant_kitchen_place_id: number = 0;
    restaurant_vat_config_id: number = 0;
    category_id: number = 0;
    category_name: string = "";
    category_type: number = 0;
    vat_percent: number = 0.0;
    avatar: string = "";
    avatar_thump: string = "";
    code: string = "";
    prefix: string = "";
    name: string = "";
    normalize_name: string = "";
    description: string = "";
    original_price: number = 0.0;
    price: number = 0.0;
    point_to_purchase: number = 0;
    unit_type: string = "";
    is_addition: number = 0;
    is_addition_like_food: number = 0;
    time_to_completed: number = 0;
    is_special_claim_point: number = 0;
    is_sell_by_weight: number = 0;
    is_allow_review: number = 0;
    is_allow_print: number = 0;
    is_allow_print_fishbowl: number = 0;
    is_allow_purchase_by_point: number = 0;
    is_take_away: number = 0;
    is_best_seller: number = 0;
    is_combo: number = 0;
    is_goods: number = 0;
    is_allow_employee_gift: number = 0;
    sale_online_status: number = 0;
    status: number = 0;
    is_deleted: number = 0;
    temporary_percent: number = 0;
    temporary_price_from_date: string = "";
    temporary_price_to_date: string = "";
    temporary_price: number = 0.0;
    is_allow_booking: number = 0;
    is_allow_completed_and_approved_for_drink: number = 0;
    is_allow_print_stamp: number = 0;
    price_with_temporary: number = 0.0;
    is_out_stock: number = 0;
    food_addition_ids: number[] = [];
    combo_food_ids: number[] = [];
    addition_foods: any[] = [];
    food_in_combo: any[] = [];
    food_list_in_promotion_buy_one_get_one: any[] = [];
    block_price: number = 0.0;
    time_per_block: number = 0;
    time_block_price: number = 0;
    is_enable_block: number = 0;
    minimum_block_price: number = 0.0;
    is_disable_sell: number = 0;

    //local
    quantity: number = 0;
    isChecked: boolean = false;
  
    constructor(init?: Partial<Food>) {
      Object.assign(this, init);
    }
  }
  