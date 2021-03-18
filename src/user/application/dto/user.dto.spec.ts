import { createUserDto } from './user.dto';

describe('UserEntity', () => {
    describe('Set value', () => {
        it('Should return set value username', () => {
            const result = 'mockTest';
            const entity: createUserDto = new createUserDto('mockTest', 'mockTest', 'mockTest');
            expect(result).toEqual(entity.username);
        });

        it('Should return set value name', () => {
            const result = 'mockTest';
            const entity: createUserDto = new createUserDto('mockTest', 'mockTest', 'mockTest');
            expect(result).toEqual(entity.name);
        });

        it('Should return set value email', () => {
            const result = 'mockTest';
            const entity: createUserDto = new createUserDto('mockTest', 'mockTest', 'mockTest');
            expect(result).toEqual(entity.email);
        });
    });

    describe('Validate exists property', () => {
        it('Should exist the property username', () => {
            const entity: createUserDto = new createUserDto('mockTest', 'mockTest', 'mockTest');
            expect(entity).toHaveProperty('username');
        });

        it('Should exist the property name', () => {
            const entity: createUserDto = new createUserDto('mockTest', 'mockTest', 'mockTest');
            expect(entity).toHaveProperty('name');
        });

        it('Should exist the property email', () => {
            const entity: createUserDto = new createUserDto('mockTest', 'mockTest', 'mockTest');
            expect(entity).toHaveProperty('email');
        });
    });
});
