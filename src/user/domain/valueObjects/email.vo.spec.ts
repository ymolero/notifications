import { EmailVO } from './email.vo';

describe('Email VO', () => {
    describe('Set value by passing validations', () => {
        it('Should set value by passing validations', () => {
            const mockValue = 'mockTest';
            const emailvo = new EmailVO(mockValue);
            const result = emailvo.getValue();
            expect(mockValue).toEqual(result);
        });
    });

    describe('Error validations', () => {
        it('Should response error by validateMinLength', () => {
            expect(function () {
                new EmailVO('test');
            }).toThrow('Validate Min Length');
        });
    });
});
