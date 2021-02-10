import { Schema } from 'mongoose';
import { SchemaUser } from './user.schema';

describe('User Schema', () => {
    it('should return schema instanceof mongose schema', () => {
        expect(SchemaUser instanceof Schema).toBeTruthy();
    });

    it('should have name property as required', () => {
        expect(SchemaUser.obj).toHaveProperty('name');
        expect(SchemaUser.obj.name).toHaveProperty('required');
        expect(SchemaUser.obj.name.required).toBeTruthy();
        expect(SchemaUser.obj.name).toHaveProperty('trim');
        expect(SchemaUser.obj.name.trim).toBeTruthy();
    });

    it('should have username property as required and unique', () => {
        expect(SchemaUser.obj).toHaveProperty('username');
        expect(SchemaUser.obj.username).toHaveProperty('required');
        expect(SchemaUser.obj.username.required).toBeTruthy();
        expect(SchemaUser.obj.username).toHaveProperty('unique');
        expect(SchemaUser.obj.username.unique).toBeTruthy();
        expect(SchemaUser.obj.username).toHaveProperty('trim');
        expect(SchemaUser.obj.username.trim).toBeTruthy();
    });

    it('should have email property as required, unique, and lower case', () => {
        expect(SchemaUser.obj).toHaveProperty('email');
        expect(SchemaUser.obj.email).toHaveProperty('required');
        expect(SchemaUser.obj.email.required).toBeTruthy();
        expect(SchemaUser.obj.email).toHaveProperty('unique');
        expect(SchemaUser.obj.email.unique).toBeTruthy();
        expect(SchemaUser.obj.email).toHaveProperty('lowercase');
        expect(SchemaUser.obj.email.lowercase).toBeTruthy();
        expect(SchemaUser.obj.email).toHaveProperty('trim');
        expect(SchemaUser.obj.email.trim).toBeTruthy();
    });
});
