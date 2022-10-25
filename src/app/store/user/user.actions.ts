import {Action} from '@ngrx/store';
import {EmailPasswordCredentials, UserCreateRequest, UserResponse} from './user.models';
import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

export enum Types {
  //user is active on session
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init: Authorized',
  INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
  INIT_ERROR = '[User] Init: Error',
  // login actions
  SIGN_IN_EMAIL = '[User] Login: Start',
  SIGN_IN_EMAIL_SUCCESS = '[User] Login: Success',
  SIGN_IN_EMAIL_ERROR = '[User] Login: Error',
  // register user actions
  SIGN_UP_EMAIL = '[User] Register user with Email: Start',
  SIGN_UP_EMAIL_SUCCESS = '[User] Register user with Email: Success',
  SIGN_UP_EMAIL_ERROR = '[User] Register user with Email: Error',
  // sign out user actions
  SIGN_OUT_EMAIL = '[User] Logout: Start',
  SIGN_OUT_EMAIL_SUCCESS = '[User] Logout: Success',
  SIGN_OUT_EMAIL_ERROR = '[User] Logout: Error',
}

// INIT-> User have a session active?
export class Init implements Action {
  readonly type = Types.INIT;

  constructor() {
  }
}

export class InitAuthorized implements Action {
  readonly type = Types.INIT_AUTHORIZED;

  constructor(public email: string, public user: UserResponse | null) {
  }
}

export class InitUnauthorized implements Action {
  readonly type = Types.INIT_UNAUTHORIZED;

  constructor() {
  }
}

export class InitError implements Action {
  readonly type = Types.INIT_ERROR;

  constructor(public error: string) {
  }
}

//Login
export class SignInEmail implements Action {
  readonly type = Types.SIGN_IN_EMAIL;

  constructor(public credentials: EmailPasswordCredentials) {
  }
}

export class SignInEmailSuccess implements Action {
  readonly type = Types.SIGN_IN_EMAIL_SUCCESS;

  constructor(public email: string, public user: UserResponse) {
  }
}

export class SignInEmailError implements Action {
  readonly type = Types.SIGN_IN_EMAIL_ERROR;

  constructor(public error: string) {
  }
}

//signup or register users
export class SignUpEmail implements Action {
  readonly type = Types.SIGN_UP_EMAIL;

  constructor(public user: UserCredential) {
  }
}

export class SignUpEmailSuccess implements Action {
  readonly type = Types.SIGN_UP_EMAIL_SUCCESS;

  constructor(public email: string, public user: UserResponse | null) {
  }
}

export class SignUpEmailError implements Action {
  readonly type = Types.SIGN_UP_EMAIL_ERROR;

  constructor(public error: string) {
  }
}

//logout
export class SignOutEmail implements Action {
  readonly type = Types.SIGN_OUT_EMAIL;

  constructor() {
  }
}

export class SignOutEmailSuccess implements Action {
  readonly type = Types.SIGN_OUT_EMAIL_SUCCESS;

  constructor() {
  }
}

export class SignOutEmailError implements Action {
  readonly type = Types.SIGN_OUT_EMAIL_ERROR;

  constructor(public error: string) {
  }
}

export type All =
  Init | InitAuthorized | InitUnauthorized | InitError
  | SignInEmail | SignInEmailSuccess | SignInEmailError
  | SignUpEmail | SignUpEmailSuccess | SignUpEmailError
  | SignOutEmail | SignOutEmailSuccess | SignOutEmailError;

