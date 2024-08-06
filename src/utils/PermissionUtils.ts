import { UserCache } from '../utils/UserCacheUtils'; // Điều chỉnh đường dẫn tùy theo cấu trúc dự án của bạn

export class PermissionUtils {
  static OWNER = 'OWNER';
  static RESTAURANT_MANAGER = 'RESTAURANT_MANAGER';
  static VIEW_ALL = 'VIEW_ALL';
  static GENERAL_MANAGER = 'GENERAL_MANAGER';
  static CASHIER_ACCESS = 'CASHIER_ACCESS';
  static DISCOUNT_ORDER = 'DISCOUNT_ORDER';
  static APPLY_VAT = 'APPLY_VAT';
  static CANCEL_COMPLETED_FOOD = 'CANCEL_COMPLETED_FOOD';
  static ACTION_ON_FOOD_AND_TABLE = 'ACTION_ON_FOOD_AND_TABLE';
  static ORDERS_MANAGER = 'ORDERS_MANAGER';
  static APP_ORDER_APPLY_VAT = 'APP_ORDER_APPLY_VAT';
  static BRAND_MANAGER = 'BRAND_MANAGER';
  static ORDER_FOOD = 'ORDER_FOOD';
  static ADD_FOOD_NOT_IN_MENU = 'ADD_FOOD_NOT_IN_MENU';
  static TICKET_MANAGEMENT = 'TICKET_MANAGEMENT';
  static REPORT_SYSTEM_ERRORS = 'REPORT_SYSTEM_ERRORS';

  private static getUserPermissions(): string[] {
    const userCache = new UserCache();
    return userCache.getUserCache().permissions; // Sử dụng thuộc tính permissions thay vì phương thức getPermissions()
  }

  static checkOwnerOrRestaurantManager(): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(PermissionUtils.OWNER) || permissions.includes(PermissionUtils.RESTAURANT_MANAGER) || permissions.includes(PermissionUtils.VIEW_ALL);
  }

  static checkOwner(): boolean {
    return this.getUserPermissions().includes(PermissionUtils.OWNER);
  }

  static checkGeneralManager(): boolean {
    return this.getUserPermissions().includes(PermissionUtils.GENERAL_MANAGER);
  }

  static checkGiftFood(): boolean {
    return this.checkOwner() || this.getUserPermissions().includes(PermissionUtils.DISCOUNT_ORDER);
  }

  static checkCashierAccess(): boolean {
    return this.checkOwner() || this.getUserPermissions().includes(PermissionUtils.CASHIER_ACCESS);
  }

  static checkCancelCompletedFood(): boolean {
    const permissions = this.getUserPermissions();
    return this.checkOwnerOrRestaurantManager() || permissions.includes(PermissionUtils.ADD_FOOD_NOT_IN_MENU) || permissions.includes(PermissionUtils.CANCEL_COMPLETED_FOOD);
  }

  static checkActionOnFoodAndTable(): boolean {
    return this.checkOwner() || this.getUserPermissions().includes(PermissionUtils.ACTION_ON_FOOD_AND_TABLE);
  }

  static checkOrderManager(): boolean {
    return this.checkOwnerOrRestaurantManager() || this.getUserPermissions().includes(PermissionUtils.ORDERS_MANAGER);
  }

  static checkBrandManager(): boolean {
    return this.getUserPermissions().includes(PermissionUtils.BRAND_MANAGER);
  }

  static checkDiscountOrder(): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(PermissionUtils.OWNER) || permissions.includes(PermissionUtils.DISCOUNT_ORDER);
  }

  static checkApplyVAT(): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(PermissionUtils.OWNER) || permissions.includes(PermissionUtils.APPLY_VAT);
  }

  static checkSharePoint(): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(PermissionUtils.ACTION_ON_FOOD_AND_TABLE) || this.checkOwner();
  }

  static checkOrderFood(): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(PermissionUtils.ORDER_FOOD) || this.checkOwner() || permissions.includes(PermissionUtils.CASHIER_ACCESS);
  }

  static checkViewAll(): boolean {
    return this.getUserPermissions().includes(PermissionUtils.VIEW_ALL);
  }

  static checkAddFoodNotInMenu(): boolean {
    return this.checkOwner() || this.getUserPermissions().includes(PermissionUtils.ADD_FOOD_NOT_IN_MENU);
  }

  static checkCancelCompletedFoodV2(): boolean {
    return this.checkOwnerOrRestaurantManager() || this.getUserPermissions().includes(PermissionUtils.CANCEL_COMPLETED_FOOD);
  }

  static checkTicketManagement(): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(PermissionUtils.TICKET_MANAGEMENT) || this.checkOwner();
  }

  static checkReportSystemErrors(): boolean {
    const permissions = this.getUserPermissions();
    return permissions.includes(PermissionUtils.REPORT_SYSTEM_ERRORS) || this.checkOwner();
  }
}
