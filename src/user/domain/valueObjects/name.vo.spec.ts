import { NameVO } from './name.vo';

describe('nameVO VO', () => {
    describe('Set value by passing validations', () => {
        it('Should set value by passing validations', () => {
            const mockValue = 'mockTest';
            const namevo = new NameVO(mockValue);
            const result = namevo.getValue();
            expect(mockValue).toEqual(result);
        });
    });

    describe('Error validations', () => {
        it('Should response error by validateMinLength', () => {
            expect(function () {
                new NameVO('test');
            }).toThrow('Validate Min Length');
        });
    });
});
