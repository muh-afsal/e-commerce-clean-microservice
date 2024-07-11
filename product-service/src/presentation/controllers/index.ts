import { IDependencies } from "../../application/interfaces/IDependencies";
import { addProductController } from "./addProducts";
import {listProductsController} from "./listProducts"

export const controllers = (dependencies: IDependencies) => {
    return{
        addProduct:addProductController(dependencies),
        listProduct:listProductsController(dependencies)
    }
};
