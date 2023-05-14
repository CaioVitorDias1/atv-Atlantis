import express, {NextFunction, Request, Response} from 'express';
import Router from './router/routes'

const app = express()
const port = 9000

app.use(express.json())

app.use("/api/cliente", Router)

app.listen(port, ()=>{
    console.log("server is running on port " + port)
})

