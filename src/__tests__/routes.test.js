import request from 'supertest';
import app from '../index';

describe('GET /api/user', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/api/user');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('GET /api/user/:id', () => {
  it('should return a user', async () => {
    const res = await request(app).get('/api/user/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe('john@doe.com');
  });
});

describe('POST /api/user', () => {
  it('should create a user', async () => {
    const res = await request(app).post('/api/user').send({
      email: 'test@user.com',
      description: 'testpassword',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe('test@user.com');
  });
});

describe('PATCH /api/user/:id', () => {
  it('should update a user', async () => {
    const res = await request(app).patch('/api/user/3').send({
      email: 'keke@keke.com',
      password: 'kekekeke',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe('keke@keke.com');
  });
});

describe('DELETE /api/user/:id', () => {
  it('should delete a user', async () => {
    const res = await request(app).delete('/api/user/3');
    expect(res.statusCode).toBe(200);
  });
});
