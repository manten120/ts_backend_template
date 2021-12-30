import express from 'express';

const editRouter = express.Router();

editRouter.get('/', (_req, res, _next) => {
  res.render('edit', {});
});

export { editRouter };
