import { UserEntity } from './user.entity';

export interface UserRepository {
    //find(): Array<UserEntity>;

    //findById(): UserEntity;
    create(user: UserEntity): Promise<void>;
    //deleteOne(): boolean;
}
