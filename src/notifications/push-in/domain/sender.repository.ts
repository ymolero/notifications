export interface SenderRepository {
  send(template: any): Promise<void>;
}
