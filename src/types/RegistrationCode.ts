export interface IRegistrationCode {
  id: string;
  code: string;
  wasUsed: boolean;
  wasIssued?: boolean;
}
