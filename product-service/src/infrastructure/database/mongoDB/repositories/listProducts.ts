import { Product } from "../../../../domain/entities";
import { product } from "../models/productSchema";
import { verifyToken } from "../../../../util/verifyTocken";

export const listProduct = async (token: string): Promise<Product[] | null> => {
    try {
        const decodedToken: any =await verifyToken(token);
        console.log("🚀 ~ file: listProduct.ts:8 ~ listProduct ~ decodedToken:", decodedToken)
        
        const Role: string | undefined = decodedToken?.role;
        console.log("🚀 ~ file: listProduct.ts:11 ~ listProduct ~ Role:", Role)

        if (!Role) {
            throw new Error('Role not found in token payload');
        }
            const products: Product[] = await product.find();

          return products;
        


        
    } catch (error) {
        console.error("Failed to list products:", error);
        throw new Error("Failed to list products--");
    }
};
