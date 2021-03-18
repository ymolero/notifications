export class NameVO {
    private value: string;

    constructor(value: string) {
        this.validateMinLength(value);
        this.value = value;
    }

    validateMinLength(value: string): void {
        if (value.length < 5) {
            throw new Error('Validate Min Length');
        }
    }

    getValue(): string {
        return this.value;
    }
}
