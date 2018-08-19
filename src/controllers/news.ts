import * as express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const callApi = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello from async');
    }, 5000);
  });

  const response = await callApi();

  res.json({ message: response });
});

export default router;
