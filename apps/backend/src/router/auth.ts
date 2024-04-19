import { Router, Request, Response } from 'express';
import { createUser, getUser } from '../database/users';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {IResponse} from "../types";

const router = Router();

router.post('/login', async (req: Request<{ email: string; password: string }>, res: IResponse<{ access_token: string }>) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ status: 'FAILED', error: 'Email and password are required' });
  }

  try {
    const user = await getUser(email);
    if (!user) {
      return res.status(400).json({ status: 'FAILED', error: 'Invalid user or password' });
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ status: 'FAILED', error: 'Invalid user or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);

    return res.json({ status: 'OK', data: { access_token: token }  });
  } catch (e: any) {
    return res.status(400).json({ status: 'FAILED', error: e.message });
  }

});

router.post('/register', async (req: Request<{ email: string; password: string }>, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('Email and password are required');
  }

  if (password.length < 6) {
    return res.status(400).json('Password must be at least 6 characters');
  }

  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await createUser({ name: email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
    return res.json({ status: 'OK', data: { access_token: token } });
  } catch (error: any) {
    return res.status(400).json({ status: "FAILED", error: error.message});
  }
});

export default router;
