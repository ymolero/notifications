import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  name: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
}));
