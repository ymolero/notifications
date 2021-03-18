import { UserEntity } from './user.entity';

export interface UserRepository {
    create(user: UserEntity): Promise<any>;
}
