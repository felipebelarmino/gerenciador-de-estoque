import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Category } from 'src/entities/category.entity';

define(Category, () => {
    const category = new Category();
    category.name = faker.commerce.department();
    category.description = faker.lorem.sentence();
    return category;
});
