import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import 'reflect-metadata';

import { indexRouter } from './routes';
import { userRouter } from './routes/user';
import { notifyAdminOfError } from './adapter/notify';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404, '存在しないパスへのリクエストです'));
});

// error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => { // _next は省略不可 error handler は4つの引数を受け取る必要がある
  res.status(err.status || 500); // 500 Internal Server Error

  try {
    // slackに通知
    notifyAdminOfError(err.stack);
  } catch (e) {
    console.error('エラーハンドラ内で管理者への通知に失敗しました', e);
  }

  if (!res.writableEnded) {
    res.send('なにかおかしいです');
  }
});

export { app };
