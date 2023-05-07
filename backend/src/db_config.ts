import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'bike_rental_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function runQuery(query: string, params: any[]): Promise<any> {4
  const [rows] = await pool.execute(query, params);
  return rows;
}
