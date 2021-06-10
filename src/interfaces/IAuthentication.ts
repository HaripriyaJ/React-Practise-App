export interface IResponse {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken:string;
    registered: boolean;
    refreshToken:string;
    expiresIn:string;
}

export interface IUserLoginData {
    email:string;
    password:string;
}
