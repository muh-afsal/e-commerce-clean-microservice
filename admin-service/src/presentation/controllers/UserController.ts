import { IDependencies } from "../../applicaton/interfaces/IDependencies";
import { User } from "../../domain/entities";
import { Request,Response,NextFunction } from "express";

export const addUserController=(dependancies:IDependencies)=>{
    const {useCases:{addUserUseCase},}=dependancies

    if(!addUserUseCase){
        throw new Error ("addUserUseCase is not defined in dependencies!")
    }
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            const userData:User=req.body;
            // console.log(userData,"userdata =============>");
            const addedUser:User|null =await addUserUseCase(dependancies).execute(userData)
            console.log(addedUser,'added user by admin');
            res.status(201).json(addedUser);
        } catch (error) {
            next(error)
        }
    }
}
