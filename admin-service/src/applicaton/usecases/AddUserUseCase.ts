import { dependancies } from "../../config/dependencies";
import { User } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const addUserUseCase=(dependancies:IDependencies)=>{
    const {repositories:{addUser}}=dependancies;
    return {
        execute:async (data:User)=>{
            try {
                return await addUser(data)
            } catch (error:any) {
                throw new Error(error?.message)
            }
        }
    }
}