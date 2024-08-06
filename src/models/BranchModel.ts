export class Branch {
    id: number;
    name: string;
    phone: string;
    address: string;
    status: number;
    branchName: string;
    cityName: string;
    districtName: string;
    wardName: string;
    streetName: string;
    cityId: number;
    districtId: number;
    wardId: number;
    banner: string;
    imageLogo: string;
    isOffice: number;
    restaurantBrandId: number;
    isCheck: boolean;
    enableCheckIn: number;
  
    constructor(
      id: number = 0,
      name: string = '',
      phone: string = '',
      address: string = '',
      status: number = 0,
      branchName: string = '',
      cityName: string = '',
      districtName: string = '',
      wardName: string = '',
      streetName: string = '',
      cityId: number = 0,
      districtId: number = 0,
      wardId: number = 0,
      banner: string = '',
      imageLogo: string = '',
      isOffice: number = 0,
      restaurantBrandId: number = 0,
      isCheck: boolean = false,
      enableCheckIn: number = 0
    ) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.address = address;
      this.status = status;
      this.branchName = branchName;
      this.cityName = cityName;
      this.districtName = districtName;
      this.wardName = wardName;
      this.streetName = streetName;
      this.cityId = cityId;
      this.districtId = districtId;
      this.wardId = wardId;
      this.banner = banner;
      this.imageLogo = imageLogo;
      this.isOffice = isOffice;
      this.restaurantBrandId = restaurantBrandId;
      this.isCheck = isCheck;
      this.enableCheckIn = enableCheckIn;
    }
  
    // Phương thức chuyển đổi từ JSON thành đối tượng Branch
    static fromJson(json: string): Branch {
      const data = JSON.parse(json);
      return new Branch(
        data.id,
        data.name,
        data.phone,
        data.address,
        data.status,
        data.branch_name,
        data.city_name,
        data.district_name,
        data.ward_name,
        data.street_name,
        data.city_id,
        data.district_id,
        data.ward_id,
        data.banner,
        data.image_logo,
        data.is_office,
        data.restaurant_brand_id,
        data.is_check,
        data.enable_checkin
      );
    }
  
    // Phương thức chuyển đổi từ đối tượng Branch thành JSON
    static toJson(branch: Branch): string {
      return JSON.stringify({
        id: branch.id,
        name: branch.name,
        phone: branch.phone,
        address: branch.address,
        status: branch.status,
        branch_name: branch.branchName,
        city_name: branch.cityName,
        district_name: branch.districtName,
        ward_name: branch.wardName,
        street_name: branch.streetName,
        city_id: branch.cityId,
        district_id: branch.districtId,
        ward_id: branch.wardId,
        banner: branch.banner,
        image_logo: branch.imageLogo,
        is_office: branch.isOffice,
        restaurant_brand_id: branch.restaurantBrandId,
        is_check: branch.isCheck,
        enable_checkin: branch.enableCheckIn
      });
    }
  }
  