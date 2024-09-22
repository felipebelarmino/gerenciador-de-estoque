import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(id_user: number): Promise<User> {
        return await this.usersRepository.findOneBy({ id_user });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const user = new User();
            user.name = createUserDto.name;
            user.email = createUserDto.email;
            user.password = createUserDto.password;
            user.role = createUserDto.role;

            const salt = await bcrypt.genSalt();

            user.password = await bcrypt.hash(user.password, salt);
            return this.usersRepository.save(user);
        } catch (error) {
            throw new BadRequestException('Erro ao salvar usuário: ' + error.message)
        }
    }


    async remove(id_user: number): Promise<void> {
        await this.usersRepository.delete(id_user);
    }
}
