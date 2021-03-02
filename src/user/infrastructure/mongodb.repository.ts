import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from 'src/user/domain/user.entity';
import { UserRepository } from 'src/user/domain/user.repository';
import { UserDocument } from 'src/user/infrastructure/user.document';
import { ReceiveUserDto } from './dtos/receiveUser.dto';

export class MongodbRepository implements UserRepository {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) {}

    async create(params: UserEntity): Promise<void> {
        const dto = new ReceiveUserDto(params.name.getValue(), params.username.getValue(), params.email.getValue());

        const user = new this.userModel(dto);
        await user.save();
    }
}
