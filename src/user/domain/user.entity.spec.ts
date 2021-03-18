import { UserEntity } from './user.entity';

describe('UserEntity', () => {
    describe('Validate username VO', () => {
        it('Validate success length > 5', () => {
            const result = { value: 'mockTest' };
            const entity: UserEntity = new UserEntity('mockTest', 'mockTest', 'mockTest');
            expect(result).toMatchObject(entity.username);
        });
    });

    describe('Validate name VO', () => {
        it('Validate success length > 5', () => {
            const result = { value: 'mockTest' };
            const entity: UserEntity = new UserEntity('mockTest', 'mockTest', 'mockTest');
            expect(result).toMatchObject(entity.name);
        });
    });

    describe('Validate email VO', () => {
        it('Validate success length > 5', () => {
            const result = { value: 'mockTest' };
            const entity: UserEntity = new UserEntity('mockTest', 'mockTest', 'mockTest');
            expect(result).toMatchObject(entity.email);
        });
    });
});
