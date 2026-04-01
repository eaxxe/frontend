export interface AcceptTokenParams {
  Type: "email_OTP" | "mobile_OTP";
  To: string;
}

export interface AcceptTokenResponse {
  ID: string;
}

export interface AcceptUserParams {
  ID: string;
  Token: string;
  email: string;
  password: string;
}

export interface AcceptUserResponse {
  ID: string;
}
