import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Supplier } from '../entities/supplier.entity';

export class CreateSuppliersSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const repository = dataSource.getRepository(Supplier);

        await repository.insert([
            {
                name: 'Fornecedor A',
                contact: 'João Silva',
                phone: '123456789',
                email: 'fornecedorA@example.com',
                address: 'Rua A, 123',
            },
        ]);
    }
}
