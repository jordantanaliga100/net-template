import { LoginDTO, RegisterDTO } from "./auth.dto.js";
class Auth {
  private users: Array<{
    id: string;
    email: string;
    username?: string;
    password: string;
  }> = [];

  public async register(userData: RegisterDTO) {
    return null;
  }

  public async login(
    userData: LoginDTO,
    userAgent: string,
    userIP: string | undefined
  ) {
    return null;
  }

  public async forgotPassword(email: string) {
    return { message: "Password reset link sent" };
  }
}
export const AuthService = new Auth();
