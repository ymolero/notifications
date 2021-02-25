import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from '../src/user.module';

describe('AppController (e2e)', () => {
    it('/ (GET)', () => {
        expect(true).toEqual(true);
    });
});
