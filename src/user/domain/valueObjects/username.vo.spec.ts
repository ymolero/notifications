import { UserNameVO } from './username.vo';

describe('UsernameVO VO', () => {
    describe('Set value by passing validations', () => {
        it('Should set value by passing validations', () => {
            const mockValue = 'mockTest';
            const usernamevo = new UserNameVO(mockValue);
            const result = usernamevo.getValue();
            expect(mockValue).toEqual(result);
        });
    });

    describe('Error validations', () => {
        it('Should response error by validateMinLength', () => {
            expect(function () {
                new UserNameVO('test');
            }).toThrow('Validate Min Length');
        });
    });
});
