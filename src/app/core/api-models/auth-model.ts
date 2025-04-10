export interface Login {
    userName?: string;
    passwordHash?: string;
}

export interface AuthResponse {
    token?: string
    user?: string
    userID?: number
    authFor?: string
    message?: string
}