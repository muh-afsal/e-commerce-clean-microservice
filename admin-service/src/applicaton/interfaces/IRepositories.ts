import { AdminEntity,AdminLoginEntity, User, UserData } from "../../domain/entities";


export interface IRepositories{
    login:(data:AdminLoginEntity)=>Promise<AdminEntity| null>
    addUser:(data:UserData)=>Promise < User | null>
}