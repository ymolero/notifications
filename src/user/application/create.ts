import { UserEntity } from '../../user/domain/user.entity';
import { UserRepository } from '../../user/domain/user.repository';
import { createUserDto } from './dto/user.dto';

export class Create {
    constructor(private readonly userRepository: UserRepository) {}

    async exec(params: createUserDto): Promise<any> {
        const userEntity = new UserEntity(params.name, params.username, params.email);
        return await this.userRepository.create(userEntity);
    }
}
