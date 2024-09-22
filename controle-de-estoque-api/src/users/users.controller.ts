import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/api/users/')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id_user')
    findOne(@Param('id_user') id_user: number): Promise<User> {
        return this.usersService.findOne(id_user);
    }

    @Post()
    create(@Body() user: CreateUserDto): Promise<User> {
        return this.usersService.create(user);
    }

    @Delete(':id_user')
    remove(@Param('id_user') id_user: number): Promise<void> {
        return this.usersService.remove(id_user);
    }
}
