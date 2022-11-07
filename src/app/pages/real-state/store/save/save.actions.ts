import { Action } from '@ngrx/store';
import { RealStateCreateRequest, RealStateResponse } from './save.models';

export enum Types {
  CREATE = '[RealState] Create: Start',
  CREATE_SUCCESS = '[RealState] Create: Success',
  CREATE_ERROR = '[RealState] Create: Error',

  READ = '[REALSTATE] Read',
  READ_SUCCESS = '[REALSTATE] Read: Success',
  READ_ERROR = '[REALSTATE] Read: Error',

}

export class Create implements Action {
  readonly type = Types.CREATE;

  constructor(public realState: RealStateCreateRequest) {
  }
}

export class CreateSuccess implements Action {
  readonly type = Types.CREATE_SUCCESS;

  constructor(public realState: RealStateResponse) {
  }
}

export class CreateError implements Action {
  readonly type = Types.CREATE_ERROR;

  constructor(public error: string) {
  }
}

export class Read implements Action {
  readonly type = Types.READ;

  constructor() {
  }
}

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;

  constructor(private realStates: RealStateResponse[]) {
  }
}

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;

  constructor(private string: string) {
  }
}

export type All =
  Create | CreateSuccess | CreateError |
  Read | ReadSuccess | ReadError;
