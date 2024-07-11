import cookieParser from 'cookie-parser'
import  dotenv  from 'dotenv'
import express,{Application,Request,Response,NextFunction} from 'express'
import adminRoutes from "../infrastructure/routes/adminRoutes"
import { dependancies } from '../config/dependencies'


dotenv.config()
const app:Application=express()
const PORT:number=Number(process.env.PORT) || 3002


app.use(express.json())
app.use(cookieParser())


app.use('/',adminRoutes(dependancies))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const errorResponse={
        errors:[{message:err.message}]
    }
    return res.status(500).json(errorResponse)
});

app.listen(PORT,()=>{
    console.log(`connected to admin service at ${PORT}`);
    
})

export default app;
