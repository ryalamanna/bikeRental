import { runQuery } from "../db_config";

export class VehicleModel {
  constructor(
    public vehicle_id: number,
    public name_id: number,
    public color: string,
    public vehicle_no: string,
    public rc: string,
    public km_driven: number,
    public last_service_km: number | null,
    public is_available: string
  ) {}

  static async getAllVehicles() {
    try{
        const query = 'SELECT * FROM vehicles';
        const result = await runQuery(query, []);
        return result;
    } catch(e){
        console.log(e)
    }

  }

  static async createVehicle(vehicle: VehicleModel) {
    try{
        const query = 'INSERT INTO vehicles (name_id, color, vehicle_no, rc, km_driven, last_service_km, is_available) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const result = await runQuery(query, [vehicle.name_id, vehicle.color, vehicle.vehicle_no, vehicle.rc, vehicle.km_driven, vehicle.last_service_km, vehicle.is_available]);
        return result;
    } catch(e){
        console.log(e)
        return false;
    }
  }

  static async deleteVehicle(id:number) {
    try{
        const query = 'DELETE FROM vehicles WHERE vehicle_id = ?';
        const result = await runQuery(query, [id]);
        return true;
    } catch(e){
        console.log(e)
        return false;
    }
  }

  static async getVehicle(id:number) {
    try{
        const query = 'SELECT * FROM vehicles WHERE vehicle_id = ?';
        const result : VehicleModel[] = await runQuery(query, [id]);
        return result;
    } catch(e){
        console.log(e)
        return false;
    }
  }

  static async updateVehicle(id:number, vehicle: VehicleModel) {
    try{
        const query = 'UPDATE vehicles SET name_id = ?, color = ?, vehicle_no = ?, rc = ?, km_driven = ?, last_service_km = ?, is_available = ? WHERE vehicle_id = ?';
        const result = await runQuery(query, [vehicle.name_id, vehicle.color, vehicle.vehicle_no, vehicle.rc, vehicle.km_driven, vehicle.last_service_km, vehicle.is_available, id]);
        return true;
    } catch(e){
        console.log(e)
        return false;
    }
  };
}
