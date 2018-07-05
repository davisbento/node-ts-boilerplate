import express from 'express';
import db from '../config/db';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await db.query('select * from banners');
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ err });
  }
});

export default router;
