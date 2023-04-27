import mysql from 'mysql2';
import { config } from 'dotenv';

config();

export const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'bike_rental_db',
});

export function runQuery(query: string, params: any[], callback: (error: Error | null, result?: any) => void): void {
  db.query(query, params, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
}
