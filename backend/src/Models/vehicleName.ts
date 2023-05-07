import { runQuery } from "../db_config";

export class vehicleNameModel 
{
    "name_id":number  = 0;
    "name": string  = '';
    "brand_id": number  = 0;
    "pph": number = 0;
    "kph": number = 0;
    "ekc": number = 0;
    "ehc": number = 0;
    "service_interval":number  = 0;
    "type_id": number = 0;

    static async getAllvehicleName() {
        try{
        const query = 'SELECT * FROM vehicle_name';
        const result = await runQuery(query, []);
        return result;
        } catch (e){
            console.log(e)
        }
    }
  }