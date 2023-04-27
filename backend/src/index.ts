import express, { Request, Response, Application, NextFunction, ErrorRequestHandler } from 'express';
import { Server } from 'http';
import createHttpError from 'http-errors';
import {config} from 'dotenv'
import {db} from '../db_config'
const app: Application = express();
config();
// app.use((req: Request, res: Response, next: NextFunction) => {
//     next(new createHttpError.NotFound())
// })

// const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//         status: err.status || 500,
//         message: err.message
//     })
// }
app.get('/', (req: Request, res: Response) => {
    
    db.query('SELECT * FROM users', (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    })
})

const port : number = Number(process.env.por || 3000);
const server: Server = app.listen(port, () => {
    console.log('listening on port' , port);
})