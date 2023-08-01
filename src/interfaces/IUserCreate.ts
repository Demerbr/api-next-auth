type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface IUserCreate {
    create(name: string, email: string, password: string):Promise<User>
}