import { User } from '../types';
import { users } from './db';

export const createUser = async (user: User) => {
  const userExists  = await users().findOne({ name: user.name });
  if (userExists) {
    throw new Error('User already exists');
  }

  const result = await users().insertOne(user);

  if (!result) {
    throw new Error('Failed to create user');
  }
  return { ...user, _id: result.insertedId };
}

export const getUser = async (name: string) => {
  return users().findOne({ name });
}
