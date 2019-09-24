import { Chat } from './chat';
import { User } from './User';

export class Res {
  success: boolean;
  err: string;
  msg: string;
  chat: Chat;
  user: User;
}
