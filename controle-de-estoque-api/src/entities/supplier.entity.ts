import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Product } from './products.entity';

@Entity('suppliers')
export class Supplier {
    @PrimaryGeneratedColumn({ name: 'id_supplier', type: 'bigint' })
    id_supplier: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100, nullable: true })
    contact: string;

    @Column({ length: 20, nullable: true })
    phone: string;

    @Column({ length: 100, nullable: true })
    email: string;

    @Column({ length: 200, nullable: true })
    address: string;

    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    creation_date: Date;

    @ManyToMany(() => Product, (product) => product.suppliers)
    @JoinTable({
        name: 'products_suppliers',
        joinColumn: { name: 'id_supplier', referencedColumnName: 'id_supplier' },
        inverseJoinColumn: { name: 'id_product', referencedColumnName: 'id_product' },
    })
    products: Product[];
}
