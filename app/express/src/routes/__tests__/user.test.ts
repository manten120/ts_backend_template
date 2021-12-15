import request from 'supertest';
import { connectToDB } from '../../orm';
import { app } from '../../app';

beforeAll(() => connectToDB());

describe('GET /user', () => {
  test('クエリidで指定したユーザーを検索する', async () => {
    await request(app).post('/user').send({ firstName: 'Hirohiko', lastName: 'Araki' });
    const response = await request(app).get('/user?id=1');
    const expectedResponseText = /id: 1 のユーザーが見つかりました/;
    return expect(response.text).toMatch(expectedResponseText);
  });

  test('クエリidで指定したユーザが存在しないとき、その旨を返す', async () => {
    const response = await request(app).get('/user?id=0');
    const expectedResponseText = /id: 0 のユーザーは存在しません/;
    return expect(response.text).toMatch(expectedResponseText);
  });

  test('クエリidが無いとき、その旨を返す', async () => {
    const response = await request(app).get('/user');
    const expectedResponseText = /idを指定してください/;
    return expect(response.text).toMatch(expectedResponseText);
  });
});

describe('POST /user', () => {
  test('ユーザーを登録する', async () => {
    const response = await request(app).post('/user').send({ firstName: 'Hirohiko', lastName: 'Araki' });
    const expectedResponseText = /ユーザーを登録しました/;
    return expect(response.text).toMatch(expectedResponseText);
  });

  test('lastNameが無いとき、その旨を返す', async () => {
    const response = await request(app).post('/user').send({ firstName: 'Hirohiko' });
    const expectedResponseText = /lastNameを入力してください/;
    return expect(response.text).toMatch(expectedResponseText);
  });

  test('firstNameが無いとき、その旨を返す', async () => {
    const response = await request(app).post('/user').send({ lastName: 'Araki' });
    const expectedResponseText = /firstNameを入力してください/;
    return expect(response.text).toMatch(expectedResponseText);
  });
});

