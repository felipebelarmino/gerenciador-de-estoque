import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from './products.entity';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn({ name: 'id_category', type: 'bigint' })
    id_category: number;

    @Column({ length: 100, unique: true })
    name: string;

    @Column('text', { nullable: true })
    description: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
