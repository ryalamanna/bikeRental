import express, { Request, Response, Application, NextFunction, ErrorRequestHandler } from 'express';
import { Server } from 'http';
import createHttpError from 'http-errors';
import {config} from 'dotenv'
import {runQuery} from './db_config';
import {vehiclesRouter} from './routes/Vehicles';
import bodyParser from 'body-parser';
import cors from 'cors';
import { vehicleNameRouter } from './routes/vehicleName';
const app: Application = express();
config();
app.use(cors()); 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

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
// app.get('/', (req: Request, res: Response) => {
    
//     runQuery('SELECT * FROM users', [] , (err: Error | null, result ) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.send(result);
//         }
//       });
// })

app.use('/vehicles' , vehiclesRouter)
app.use('/vehicleName' , vehicleNameRouter)

const port : number = Number(process.env.PORT || 3000);
const server: Server = app.listen(port, () => {
    console.log('listening on port' , port);
})



