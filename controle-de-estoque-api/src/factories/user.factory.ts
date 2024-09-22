import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { User } from 'src/entities/users.entity';

define(User, () => {
    const user = new User();
    user.name = faker.name.fullName();
    user.email = faker.internet.email();
    user.password = faker.internet.password();
    user.role = faker.helpers.arrayElement(['admin', 'funcionario']);
    user.creation_date = new Date();
    return user;
});
