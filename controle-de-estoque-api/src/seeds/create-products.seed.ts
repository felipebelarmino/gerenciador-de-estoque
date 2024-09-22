import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Category } from '../entities/category.entity';
import { Product } from 'src/entities/products.entity';

export class CreateProductsSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const productRepository = dataSource.getRepository(Product);
        const categoryRepository = dataSource.getRepository(Category);

        const categories = await categoryRepository.find();

        const products = [
            {
                name: 'Água Mineral',
                description: 'Garrafa de 500ml',
                unit_measure: 'litro',
                minimum_stock: 50,
                current_stock: 100,
                id_category: categories.find(c => c.name === 'Bebidas')?.id_category,
            },
        ];

        await productRepository.insert(products);
    }
}
