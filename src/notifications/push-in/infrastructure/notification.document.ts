import { Document } from 'mongoose';

export interface NotificationDocument extends Document {
  readonly customerIds: string;
  readonly title: string;
  readonly body: string;
  readonly category: string;
  readonly type: string;
  readonly companyId: string;
  readonly companyClientId: string;
}
