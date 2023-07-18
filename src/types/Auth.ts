import { IUser } from ".";

export interface IRegisterUserInput {
  name1: string;
  name2?: string;
  username: string;
  email: string;
  imageURL?: string;
  password: string;
  passwordConfirmation: string;
  phoneNumber?: string;
  registrationCode: string;
}

export interface IRegisterUserArgs {
  userDetails: IRegisterUserInput;
  imageToUpload?: any;
}

export interface ILoginInput {
  usernameOrEmail: string;
  password: string;
}

export interface ILoginArgs {
  input: ILoginInput;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IRevokeRefreshTokenInput {
  userId: string;
}

export interface IRevokeRefreshTokenArgs {
  input: IRevokeRefreshTokenInput;
}

export interface IResetPasswordInput {
  newPassword: string;
  newPasswordConfirmation: string;
  token: string;
}

export interface IResetPasswordArgs {
  input: IResetPasswordInput
}

export interface IChangePasswordInput {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export interface IChangePasswordArgs {
  input: IChangePasswordInput;
}
