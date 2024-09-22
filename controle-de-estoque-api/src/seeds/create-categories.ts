import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Category } from '../entities/category.entity';

export class CreateCategoriesSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const repository = dataSource.getRepository(Category);

        await repository.insert([
            {
                name: 'Bebidas',
                description: 'Todos os tipos de bebidas',
            },
            {
                name: 'Comidas',
                description: 'Todos os tipos de comidas',
            },
        ]);
    }
}
