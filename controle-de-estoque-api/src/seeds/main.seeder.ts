import { DataSource } from 'typeorm';
import { Seeder, runSeeder } from 'typeorm-extension';
import { CreateUsersSeeder } from './create-users.seed';
import { CreateCategoriesSeeder } from './create-categories';
import { CreateSuppliersSeeder } from './create-supplier';
import { CreateProductsSeeder } from './create-products.seed';

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        await runSeeder(dataSource, CreateUsersSeeder);
        await runSeeder(dataSource, CreateCategoriesSeeder);
        await runSeeder(dataSource, CreateSuppliersSeeder);
        await runSeeder(dataSource, CreateProductsSeeder);
    }
}
