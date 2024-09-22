import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Supplier } from 'src/entities/supplier.entity';

define(Supplier, () => {
    const supplier = new Supplier();
    supplier.name = faker.company.name();
    supplier.contact = faker.name.fullName();
    supplier.phone = faker.phone.number();
    supplier.email = faker.internet.email();
    supplier.address = faker.address.streetAddress();
    supplier.creation_date = new Date();
    return supplier;
});
