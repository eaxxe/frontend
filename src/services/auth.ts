import { ApiClient } from "../api/client";
import type { ConnectionInfo } from "../api/client";
import type {
  AcceptTokenParams,
  AcceptUserParams,
  AcceptTokenResponse,
  AcceptUserResponse,
} from "../api/types";

export interface AuthServiceConfig {
  host: string;
  port: string | number;
  path: string;
  guestUsername: string;
  guestPassword: string;
}

export interface SendOtpResult {
  id: string;
}

export interface RegisterResult {
  userId: string;
}

export class AuthService {
  private client: ApiClient;

  constructor(config: AuthServiceConfig) {
    const authString = btoa(`${config.guestUsername}:${config.guestPassword}`);
    const connectionInfo: ConnectionInfo = {
      host: config.host,
      port: config.port,
      pathPrefix: config.path,  
      authentication: authString,
    };
    this.client = new ApiClient(connectionInfo);
  }

  async sendOtp(type: "email" | "mobile", to: string): Promise<SendOtpResult> {
    const params: AcceptTokenParams = {
      Type: `${type}_OTP`,
      To: to,
    };
    const response: AcceptTokenResponse = await this.client.acceptToken(params);
    return { id: response.ID };
  }

  async register(
    otpId: string,
    code: string,
    email: string,
    password: string,
  ): Promise<RegisterResult> {
    const params: AcceptUserParams = {
      ID: otpId,
      Token: code,
      email,
      password,
    };
    const response: AcceptUserResponse = await this.client.acceptUser(params);
    return { userId: response.ID };
  }
}
