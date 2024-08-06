export class SettingBranchData {
    isAllowAdvert: number;
    isWorkingOffline: number;
    isEnableBooking: number;
    isHaveTakeAway: number;
    isEnableFishBowl: number;
    isPrintBillLogo: number;
    isWirelessCallSystem: number;
    wirelessCallSystemTotal: number;
    isEnableStamp: number;
    isApplyOnlyCashAmountPaymentMethod: number;
    serviceChargePercent: number;
    serviceChargeAmount: number; // BigDecimal tương đương với number trong TypeScript
    serviceChargeUseType: number;
    isEnableSendToKitchenRequest: number;
    isEnableFoodCourt: number;
    vatContentOnBill: string;
    greetingContentOnBill: string;
    isEnableCheckIn: number;
  
    constructor(data: Partial<SettingBranchData> = {}) {
      this.isAllowAdvert = data.isAllowAdvert ?? 0;
      this.isWorkingOffline = data.isWorkingOffline ?? 0;
      this.isEnableBooking = data.isEnableBooking ?? 0;
      this.isHaveTakeAway = data.isHaveTakeAway ?? 0;
      this.isEnableFishBowl = data.isEnableFishBowl ?? 0;
      this.isPrintBillLogo = data.isPrintBillLogo ?? 0;
      this.isWirelessCallSystem = data.isWirelessCallSystem ?? 0;
      this.wirelessCallSystemTotal = data.wirelessCallSystemTotal ?? 0;
      this.isEnableStamp = data.isEnableStamp ?? 0;
      this.isApplyOnlyCashAmountPaymentMethod = data.isApplyOnlyCashAmountPaymentMethod ?? 0;
      this.serviceChargePercent = data.serviceChargePercent ?? 0;
      this.serviceChargeAmount = data.serviceChargeAmount ?? 0; // BigDecimal tương đương với number
      this.serviceChargeUseType = data.serviceChargeUseType ?? 0;
      this.isEnableSendToKitchenRequest = data.isEnableSendToKitchenRequest ?? 0;
      this.isEnableFoodCourt = data.isEnableFoodCourt ?? 0;
      this.vatContentOnBill = data.vatContentOnBill ?? '';
      this.greetingContentOnBill = data.greetingContentOnBill ?? '';
      this.isEnableCheckIn = data.isEnableCheckIn ?? 0;
    }
  
    static fromJson(json: string): SettingBranchData {
      const data = JSON.parse(json);
      return new SettingBranchData(data);
    }
  
    toJson(): string {
      return JSON.stringify(this);
    }
  }