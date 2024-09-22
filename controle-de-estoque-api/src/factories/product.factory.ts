import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Product } from 'src/entities/products.entity';

define(Product, () => {
    const product = new Product();
    product.name = faker.commerce.productName();
    product.description = faker.commerce.productDescription();
    product.unit_measure = faker.helpers.arrayElement(['kg', 'litro', 'unidade']);
    product.minimum_stock = faker.number.int({ min: 10, max: 100 });
    product.current_stock = faker.number.int({ min: 0, max: 100 });
    product.creation_date = new Date();

    return product;
});
