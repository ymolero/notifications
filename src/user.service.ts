import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { createUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getUsers(): Promise<User[]> {
        return await this.userModel.find();
    }

    async createUser(user: createUserDTO): Promise<User> {
        const product = new this.userModel(user);
        return await product.save();
    }

    async deleteUser(id: string): Promise<boolean> {
        const { deletedCount } = await this.userModel.deleteOne({ _id: id });
        return deletedCount > 0;
    }

    async updateUser(id: string, user: createUserDTO): Promise<boolean> {
        const { nModified } = await this.userModel.updateOne({ _id: id }, user, { runValidators: true });
        return nModified > 0;
    }
}
