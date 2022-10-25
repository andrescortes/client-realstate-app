export {User as UserResponse} from 'src/app/models/backend/user';
import {User} from 'src/app/models/backend/user';

export interface EmailPasswordCredentials {
  email: string,
  password: string
}

export interface UserRequest extends User {
  password: string;
}

export type UserCreateRequest = Omit<UserRequest, 'token'>;
