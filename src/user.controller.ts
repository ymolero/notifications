import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { createUserDTO } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() user: createUserDTO): Promise<User> {
        return await this.userService.createUser(user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<boolean> {
        return await this.userService.deleteUser(id);
    }

    @Put(':id')
    async updateUser(@Body() user: createUserDTO, @Param('id') id: string): Promise<boolean> {
        return await this.userService.updateUser(id, user);
    }
}
