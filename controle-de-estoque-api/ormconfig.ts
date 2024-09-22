import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'senha123',
    database: process.env.DB_DATABASE || 'controle_estoque',
    entities: [__dirname + '/src/entities/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
    synchronize: false,
    logging: false,
});
