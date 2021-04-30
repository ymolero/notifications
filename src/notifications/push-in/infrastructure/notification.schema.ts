import { Schema } from 'mongoose';

export const SchemaNotification = new Schema(
  {
    customerIds: [
      {
        type: String,
        required: [true, 'CUSTOMERS_REQUIRED'],
        trim: true,
      },
    ],
    title: {
      type: String,
      required: [true, 'TITLE_REQUIRED'],
      trim: true,
    },
    body: {
      type: String,
      required: [true, 'BODY_REQUIRED'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'CATEGORY_REQUIRED'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'TYPE_REQUIRED'],
      trim: true,
    },
    companyId: {
      type: String,
      required: [true, 'COMPANY_ID_REQUIRED'],
      trim: true,
    },
    companyClientId: {
      type: String,
      required: [true, 'COMPANY_CLIENT_ID_REQUIRED'],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
