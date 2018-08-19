import * as express from 'express';
import { findByEmail, saveUser } from '../repository/userRepository';
import { IUser } from '../interfaces/IUser';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user: IUser[] = await findByEmail(req.body.email);

    if (user.length > 0) {
      return res.status(500).json({ success: false, message: 'E-mail already taken' });
    }

    else {
      const data: IUser = {
        email: req.body.email,
        pass: req.body.password
      };

      const response = await saveUser(data);

      return res.status(200).json({ success: true, user: response });
    }
  }
  catch (err) {
    return res.status(500).json({ sucess: false, error: err });
  }
});

export default router;
