import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import proxy from 'express-http-proxy';
const app=express();
const port=4000;


app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.get('/test',(req,res)=>{
    res.json({success:true})
  })


app.use('/auth',proxy('http://localhost:3001'))
app.use('/admin',proxy('http://localhost:3002'))
app.use('/product',proxy('http://localhost:3003'))
app.use('/cart',proxy('http://localhost:3004'))

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
    
})   