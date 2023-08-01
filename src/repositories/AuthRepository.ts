import { compare } from "bcrypt";
import  jwt  from "jsonwebtoken";
import prisma from "../database";
import { IUserAuthenticate } from "../interfaces/IUserAuthenticate";



type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}

class AuthRepository implements IUserAuthenticate{
 public async auth(email: string, password: string): Promise<User> {

    const user = await prisma.user.findFirst({
        where: { email }
    })

    if(!user){
        throw new Error("Error: Usuário ou senha incorretos: email");
        
    }

    const checkPassword = await compare(password, user.password)

    if(!checkPassword){
        throw new Error("Error: Usuário ou senha incorretos: senha");
        
    }


    const token = jwt.sign({id: user.id}, "secret", {
        expiresIn: '1d'
    })


    delete user?.password

    const data = {...user, token}

    return data

        
    }

}

export { AuthRepository}