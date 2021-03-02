import { EmailVO } from './valueObjects/email.vo';
import { NameVO } from './valueObjects/name.vo';
import { UserNameVO } from './valueObjects/username.vo';

export class UserEntity {
    name: NameVO;
    username: UserNameVO;
    email: EmailVO;

    constructor(name: string, username: string, email: string) {
        this.username = new UserNameVO(username);
        this.name = new NameVO(name);
        this.email = new EmailVO(email);
    }
}
