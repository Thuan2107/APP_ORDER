export class Config {
    realtimeDomain: string;
    apiKey: string;
    restaurantName: string;
    apiUpload: string;
    apiUploadShort: string;
    apiOauthNode: string;
    session: string;
    socketConectLogin: string;
    apiChatTms?: string; // Optional property
  
    constructor(
      realtimeDomain: string = '',
      apiKey: string = '',
      restaurantName: string = '',
      apiUpload: string = '',
      apiUploadShort: string = '',
      apiOauthNode: string = '',
      session: string = '',
      socketConectLogin: string = '',
      apiChatTms?: string
    ) {
      this.realtimeDomain = realtimeDomain;
      this.apiKey = apiKey;
      this.restaurantName = restaurantName;
      this.apiUpload = apiUpload;
      this.apiUploadShort = apiUploadShort;
      this.apiOauthNode = apiOauthNode;
      this.session = session;
      this.socketConectLogin = socketConectLogin;
      this.apiChatTms = apiChatTms;
    }
  }