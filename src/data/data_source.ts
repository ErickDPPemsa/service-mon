import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { Entities } from "../models"
import { conf } from "../config/config";

type mode = 'development' | 'test' | 'production';

const env: mode = process.env.NODE_ENV as mode ?? 'development';
const config = (conf as { [key: string]: DataSourceOptions })[env];

export const AppDataSource = new DataSource({
    ...config,
    synchronize: true,
    logging: false,
    entities: Entities,
    migrations: [],
    subscribers: [],
})
