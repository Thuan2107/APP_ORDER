export class User {
    id: number;
    name: string;
    username: string;
    password: string;
    restaurantName: string;
    domainName: string;
    email: string;
    phone: string;
    accessToken: string;
    jwtToken: string;
    avatar: string;
    address: string;
    branchName: string;
    restaurantId: number;
    gender: number;
    branchId: number;
    currentPoint: number;
    permissions: string[];
    restaurantBrandId: number;
    restaurantBrandName: string;
    brandLogo: string;
    employeeRoleName: string;
    branchAddress: string;
    isShowDialogChooseBranch: boolean;
    isBranchOffice: number;
    isEnableChangePassword: number;
    isWorking: number;
  
    constructor() {
      this.id = 0;
      this.name = '';
      this.username = '';
      this.password = '';
      this.restaurantName = '';
      this.domainName = '';
      this.email = '';
      this.phone = '';
      this.accessToken = '';
      this.jwtToken = '';
      this.avatar = '';
      this.address = '';
      this.branchName = '';
      this.restaurantId = 0;
      this.gender = 0;
      this.branchId = 0;
      this.currentPoint = 0;
      this.permissions = [];
      this.restaurantBrandId = 0;
      this.restaurantBrandName = '';
      this.brandLogo = '';
      this.employeeRoleName = '';
      this.branchAddress = '';
      this.isShowDialogChooseBranch = true;
      this.isBranchOffice = 0;
      this.isEnableChangePassword = 1;
      this.isWorking = 1;
    }
  
    // Các phương thức có thể được thêm vào đây
  }