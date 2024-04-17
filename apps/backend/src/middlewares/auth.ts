import { Request, Response,NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ status: 'FAILED', error: 'Access Denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded ) => {
    if (err) {
      return res.status(401).send({ status: 'FAILED', error: 'Not authorized' });
    }
    if (!(decoded as {id: string}).id) {
      return res.status(401).send({ status: 'FAILED', error: 'Not authorized' })
    } else {
      req.headers.userId = (decoded as {id: string}).id;
      next()
    }
  });
}
