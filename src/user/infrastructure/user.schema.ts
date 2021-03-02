import { Schema } from 'mongoose';

export const SchemaUser = new Schema(
    {
        name: {
            type: String,
            required: [true, 'NAME_REQUIRED'],
            trim: true,
        },
        username: {
            type: String,
            required: [true, 'USERNAME_REQUIRED'],
            unique: [true, 'USERNAME_UNIQUE'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'EMAIL_REQUIRED'],
            trim: true,
            lowercase: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);
