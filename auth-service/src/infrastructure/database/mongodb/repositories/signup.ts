import {User} from "../models/loginCredentials"
import { UserEntity } from "../../../../domain/entities"

export const signup = async (
    data: UserEntity
) : Promise<UserEntity | null > => {
    try {
        console.log(data,"reached sighn up repository ----");
        
        const newUser = await User.create(data)
        console.log(newUser,"user created")
        
        if (!newUser) {
            throw new Error("User creation failed!");
        }

        return newUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}