export class Setting {
    branchType: number = 0;
    branchTypeOption: number = 0;
    isHideTotalAmountBeforeCompleteBill: number = 0;
    enableTms: number = 0;
    isEnableMembershipCard: number = 0;
    serviceRestaurantLevelId: number = 0;
    isOpenTableAndCreateOrderWithoutAddFood: number = 0;
    isRequireUpdateCustomerSlotInOrder: number = 0;
    isEnableStamp: number = 0;
    branchInfo: BranchInfo = new BranchInfo();
    isHaveWifi: number = 0;
    wifiName: string = "";
    wifiPassword: string = "";
    isHaveTakeAway: number = 0;
    isApplyOnlyCashAmountPaymentMethod: number = 0;
    isAllowAdvert: number = 0;
    isWorkingOffline: number = 0;
    isEnableBooking: number = 0;
    isEnableFishBowl: number = 0;
    isPrintBillLogo: number = 0;
    isWirelessCallSystem: number = 0;
    wirelessCallSystemTotal: number = 0;
    serviceChargePercent: number = 0;
    serviceChargeAmount: number = 0; // BigDecimal equivalent in TypeScript
    serviceChargeUseType: number = 0;
    hourToTakeReport: number = 0;
    isEnableSendToKitchenRequest: number = 0;
    isHiddenPaymentDetailInBill: number = 0;
    isEnableFoodCourt: number = 0;
    isShowVatOnItemsInBill: number = 0;
    templateBillPrinterType: number = 0;
    isEnableBuffet: number = 0;
    vatContentOnBill: string = "";
    greetingContentOnBill: string = "";
    isEnableCheckIn: number = 0;
  
    // Optional: You can add methods to manipulate or validate data
  }
  
  export class BranchInfo {
    address: string = "";
    phone: string = "";
    name: string = "";
    id: number = 0;
    imageLogoUrl: string = "";
    bannerImageUrl: string = "";
  }