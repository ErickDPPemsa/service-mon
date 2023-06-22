import { config } from "dotenv";
import { DataSourceOptions, } from 'typeorm';
config();

type Type = Exclude<Pick<DataSourceOptions, 'type'>['type'], "sqljs">;

export const conf: { [key: string]: DataSourceOptions } = {
  development: {
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: 'Desarrollo1234',
    database: 'SERVICEMON',
    options: {
      trustServerCertificate: true
    }
  },
  test: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Desarrollo1234',
    database: 'SERVICEMON',
  },
  production: {
    type: process.env.SERVER_TYPE as Type,
    host: process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT!),
    username: process.env.SERVER_USERNAME,
    password: process.env.SERVER_PASSWORD,
    database: process.env.SERVER_DB_NAME ?? '',

    location: '',
    driver: '',
    region: '',
    secretArn: '',
    resourceArn: '',
    timeTravelQueries: false
  }
}