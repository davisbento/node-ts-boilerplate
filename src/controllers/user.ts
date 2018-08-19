import { IUser } from './../interfaces/IUser';
import { formatError } from './../helpers/formatError';
import * as express from 'express';
import { User } from '../models/user';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user: Array<IUser> = await User.find();

    if (user.length === 0) {
      return res.status(404).json({ success: true, data: [] });
    }

    return res.status(200).json({ success: true, data: user });
  }
  catch (err) {
    const errors = formatError(err);
    return res.status(500).json({ sucess: false, errors });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user: IUser = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: true, data: {} });
    }

    return res.status(200).json({ success: true, data: user });
  }
  catch (err) {
    const errors = formatError(err);
    return res.status(500).json({ sucess: false, errors });
  }
});

export default router;
