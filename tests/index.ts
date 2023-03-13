import Server from '../src/server';
import supertest from 'supertest';

describe('global', () => {
    test('API users', () => {
        const app = supertest(new Server(3001).start())

        expect(10).toBe(10)
    })
})