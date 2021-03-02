export class NameVO {
    private value: string;

    constructor(value: string) {
        this.validateMaxLength(value);
        this.value = value;
    }

    validateMaxLength(value: string): void {
        if (value.length > 5) {
            throw new Error('Validate Max Length');
        }
    }

    getValue(): string {
        return this.value;
    }
}
