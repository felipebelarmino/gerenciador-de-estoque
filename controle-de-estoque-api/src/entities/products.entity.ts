import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn({ name: 'id_product', type: 'bigint' })
    id_product: number;

    @Column({ length: 100 })
    name: string;

    @Column('text', { nullable: true })
    description: string;

    @Column({ length: 20 })
    unit_measure: string;

    @Column('numeric')
    minimum_stock: number;

    @Column('numeric')
    current_stock: number;

    @Column({ type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
    creation_date: Date;

    @Column({ type: 'bigint', name: 'id_category' })
    id_category: number;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'id_category' })
    category: Category;

    @ManyToMany(() => Supplier, (supplier) => supplier.products)
    suppliers: Supplier[];
}
