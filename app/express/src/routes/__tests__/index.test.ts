import request from 'supertest';
import { app } from '../../app';

describe('GET /', () => {
  it('returns "routes/index"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('routes/index');
  });
});
