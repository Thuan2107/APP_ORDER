export class BranchData {
    restaurantBrandId: number;
    status: number;
    name: string;
    id: number;
    isOffice: number;
    address: string;
    imageLogo: string;
    phone: string;
    enableCheckIn: number;
  
    constructor(data: Partial<BranchData> = {}) {
      this.restaurantBrandId = data.restaurantBrandId || 0;
      this.status = data.status || 0;
      this.name = data.name || '';
      this.id = data.id || 0;
      this.isOffice = data.isOffice || 0;
      this.address = data.address || '';
      this.imageLogo = data.imageLogo || '';
      this.phone = data.phone || '';
      this.enableCheckIn = data.enableCheckIn || 0;
    }
  
    static fromJson(json: string): BranchData {
      const data = JSON.parse(json);
      return new BranchData(data);
    }
  
    toJson(): string {
      return JSON.stringify(this);
    }
  }