import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @Length(3, 100)
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(6, 255)
    password: string;

    @IsNotEmpty()
    @Length(4, 20)
    role: string;
}
