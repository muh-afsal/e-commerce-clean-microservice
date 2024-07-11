import { loginAdminUseCase } from "../../domain/useCaseInterface/AdminUseCaseInterface";
import { AddUserUseCase } from "../../domain/useCaseInterface/addUserUseCase";
import { IDependencies } from "./IDependencies";

export interface IUseCase{
    loginAdminUseCase:(dependancies:IDependencies)=>loginAdminUseCase
    addUserUseCase:(dependancies:IDependencies)=>AddUserUseCase
}