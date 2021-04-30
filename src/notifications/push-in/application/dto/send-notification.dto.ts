export class SendNotificationDto {
  customerIds: Array<string>;
  title: string;
  body: string;
  platform: 'ios' | 'android';
  firebaseToken: string;
  data: any;
  category?: string;
  type?: string;
  companyId?: string;
  companyClientId?: string;

  constructor(
    customerIds: Array<string>,
    title: string,
    body: string,
    platform: 'ios' | 'android',
    firebaseToken: string,
    data: any,
    category?: string,
    type?: string,
    companyId?: string,
    companyClientId?: string,
  ) {
    this.customerIds = customerIds;
    this.title = title;
    this.body = body;
    this.platform = platform;
    this.firebaseToken = firebaseToken;
    this.data = data;
    this.category = category;
    this.type = type;
    this.companyId = companyId;
    this.companyClientId = companyClientId;
  }
}
