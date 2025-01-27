import { IRepositories } from "./IRepositories";
import { IUseCase } from "./IUseCases";


export interface IDependencies{
    repositories:IRepositories,
    useCases:IUseCase
}