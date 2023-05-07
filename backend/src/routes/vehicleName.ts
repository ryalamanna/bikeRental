import express, { Request, Response, Application, NextFunction, ErrorRequestHandler ,Router} from 'express';
import {runQuery} from '../db_config'
import { vehicleNameModel } from '../Models/vehicleName';

export const vehicleNameRouter = Router();

vehicleNameRouter.get('/', async(req: Request, res: Response) => {
    const data = await vehicleNameModel.getAllvehicleName()
    res.send(data)
});