export class NotificationEntity {
  customerIds: Array<string>;
  title: string;
  body: string;
  category?: string;
  type?: string;
  companyId?: string;
  companyClientId?: string;

  //   constructor(name: string, username: string, email: string) {
  //     this.username = new UserNameVO(username);
  //     this.name = new NameVO(name);
  //     this.email = new EmailVO(email);
  //   }
}
