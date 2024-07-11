import * as repositories from '../infrastructure/dataBase/mongodb/repositories'
import { IDependencies } from '../applicaton/interfaces/IDependencies'
import * as useCases from '../applicaton/usecases'



export const dependancies:IDependencies={
    repositories,useCases
}