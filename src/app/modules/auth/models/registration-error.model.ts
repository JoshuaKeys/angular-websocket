export interface RegistrationErrorModel {
    errors: {
        errors: {
            msg: string;
            param: string;
            location: string;
        }[]
    }
}