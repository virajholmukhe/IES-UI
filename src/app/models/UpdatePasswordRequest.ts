export interface UpdatePasswordRequest {

    email: string;
    tempPassword: string;
    password: string;
    confirmPassword: string;
    
}