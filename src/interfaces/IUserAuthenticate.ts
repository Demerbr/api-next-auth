type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface IUserAuthenticate{
    auth(email: string, password: string): Promise<User>
}