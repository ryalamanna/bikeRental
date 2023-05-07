import express, {
    Request,
    Response,
    Application,
    NextFunction,
    ErrorRequestHandler,
    Router,
} from 'express';
import { runQuery } from '../db_config';
import { VehicleModel } from '../Models/Vehicles';

export const vehiclesRouter = Router();

vehiclesRouter.get('/', async (req: Request, res: Response) => {
    const data = await VehicleModel.getAllVehicles();
    res.send(data);
});

vehiclesRouter.post( '/', async (req: Request<{}, {}, VehicleModel, {}>, res: Response) => {
        const data = await VehicleModel.createVehicle(req.body);
        if (data) {
            res.send({ message: 'success' });
        } else {
            res.send({ message: 'failed' });
        }
    }
);

vehiclesRouter.delete('/:id', async (req: Request<{id : number},{},{},{}>, res: Response) => {
    try {
        const id : number = req.params.id;
        const data: boolean = await VehicleModel.deleteVehicle(id);
        if (data) {
            res.send({ message: 'success' });
        } else {
            res.send({ message: 'failed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while creating the vehicle.',
        });
    }
});

vehiclesRouter.get('/:id', async (req: Request<{id : number},{},{},{}>, res: Response) => {
    try {
        const id : number = req.params.id;
        const data: VehicleModel[] | false = await VehicleModel.getVehicle(id);
        if (data){
            res.send({ message: 'success' , data : data[0]});
        } else{
            res.send({ message: 'failed' });
        }
    } catch (error){
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while getting the vehicle.',
        });
    }
});

vehiclesRouter.put('/:id', async (req: Request<{id : number},{},VehicleModel,{}>, res: Response) => {
    try {
        const id : number = req.params.id;
        const data: boolean = await VehicleModel.updateVehicle(id, req.body);
        if (data) {
            res.send({ message: 'success' });
        } else {
            res.send({ message: 'failed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while updating the vehicle.',
        });
    }
});
