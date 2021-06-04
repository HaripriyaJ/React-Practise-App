interface IAuthService {
    isAuthenticated: boolean;
    authenticate: (response:any) => boolean;
}

export const AuthService:IAuthService = {
    isAuthenticated: false,

    authenticate(response:any): boolean {
      this.isAuthenticated = true;
      return this.isAuthenticated
    }
}