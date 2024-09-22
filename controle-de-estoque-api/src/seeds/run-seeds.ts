import 'reflect-metadata';
import { AppDataSource } from '../../ormconfig';
import { MainSeeder } from './main.seeder';
import { runSeeder } from 'typeorm-extension';

async function runSeeds() {
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized.');

        await runSeeder(AppDataSource, MainSeeder);

        console.log('Seeding completed successfully.');
    } catch (err) {
        console.error('Error during seeding:', err);
    } finally {
        await AppDataSource.destroy();
    }
}

runSeeds();
