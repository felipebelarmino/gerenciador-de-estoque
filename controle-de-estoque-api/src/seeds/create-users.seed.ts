import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { User } from '../entities/users.entity';
import * as bcrypt from 'bcrypt';

export class CreateUsersSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const repository = dataSource.getRepository(User);

        const password = await bcrypt.hash('senha123', 10);

        await repository.insert([
            {
                name: 'Administrador',
                email: 'admin@example.com',
                password: password,
                role: 'admin',
                creation_date: new Date(),
            },
        ]);
    }
}
