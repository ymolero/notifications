export class UserNameVO {
    private value: string;

    constructor(value: string) {
        this.validateMixLength(value);
        this.value = value;
    }

    validateMixLength(value: string): void {
        if (value.length < 5) {
            throw new Error('Validate Mix Length');
        }
    }

    getValue(): string {
        return this.value;
    }
}
