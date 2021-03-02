import { UserEntity } from './user.entity';

export interface UserRepository {
    //find(): Array<UserEntity>;

    //findById(): UserEntity;
    create(params: UserEntity): void;
    //deleteOne(): boolean;
}
