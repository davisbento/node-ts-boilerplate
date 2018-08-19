import * as express from 'express';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/user';
import { formatError } from '../helpers/formatError';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user: Array<IUser> = await User.find({ email: req.body.email });

    if (user.length > 0) {
      // http status for 'conflict'
      return res.status(409).json({ success: false, error: { message: 'E-mail already taken' } });
    }

    else {
      const data: IUser = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
      };

      const user = new User();
      user.password = data.password ? user.generateHash(data.password) : '';
      user.email = data.email;
      user.name = data.name;

      const response = await user.save();

      return res.status(200).json({ success: true, data: response });
    }
  }
  catch (err) {
    const errors = formatError(err);
    return res.status(500).json({ sucess: false, errors });
  }
});

export default router;
