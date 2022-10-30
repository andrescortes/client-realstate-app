import * as fromActions from './user.actions';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {NotificationService} from '../../services';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {UserResponse} from "./user.models";
import {environment} from '../../../environments/environment';

type Action = fromActions.All;

@Injectable()
export class UserEffects {
  constructor(private httpClient: HttpClient,
              private actions: Actions,
              private notification: NotificationService,
              private router: Router) {
  }

  signUpEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_UP_EMAIL),
      map((action: fromActions.SignUpEmail) => action.user),
      switchMap(userData =>
        this.httpClient.post<UserResponse>(`${environment.url}api/authentication/sign-up`, userData)
        .pipe(
          tap((response: UserResponse) => {//tap is success if new user is created
            localStorage.setItem('token', response.token);
            this.router.navigate(['/']);
          }),
          // function map creates an Observable, like a wrapper to fromAction.SignUpEmailSuccess, remember that have to return an Observable type
          map((response: UserResponse) => new fromActions.SignUpEmailSuccess(response.email, response || null)),//success to create new user
          catchError(err => {// catch error from server, creates an instance of object fromActions...
            this.notification.error("Error at register new user.");
            return of(new fromActions.SignUpEmailError(err));//operator of, creates an Observable type Action
          })
        )
      )
    )
  );

  signInEmail: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.SIGN_IN_EMAIL),//define which is operation to use
      map((action: fromActions.SignInEmail) => action.credentials),//get params to do the operation
      switchMap(userData =>//represents to communication with the server, and process with data returned
        this.httpClient.post<UserResponse>(`${environment.url}api/authentication/sign-in`, userData)
        .pipe(
          tap((response: UserResponse) => {//tap is success if response return is ok
            localStorage.setItem('token', response.token);
            this.router.navigate(['/']).then(()=> this.notification.success("Login successfully."));
          }),
          // function map creates an Observable, like a wrapper to fromAction.SignUpEmailSuccess, remember that have to return an Observable type
          map((response: UserResponse) => new fromActions.SignInEmailSuccess(response.email, response || null)),//success to create new user
          catchError(err => {// catch error from server, creates an instance of object fromActions...
            this.notification.error("Credentials are not valid.");
            return of(new fromActions.SignInEmailError(err));//operator of, creates an Observable type Action
          })
        )
      )
    )
  );


  init: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.INIT),//define which is operation to use
      switchMap(async () => localStorage.getItem('token')),
      switchMap(token => {//represents to communication with the server, and process with data returned
          if (token) {
            return this.httpClient.get<UserResponse>(`${environment.url}api/user`)
            .pipe(
              tap((response: UserResponse) => {//tap is success if response return is ok
                //console.log('data of user on session from server', response);
              }),
              // function map creates an Observable, like a wrapper to fromAction.SignUpEmailSuccess, remember that have to return an Observable type
              map((response: UserResponse) => new fromActions.InitAuthorized(response.email, response || null)),//success to create new user
              catchError(err => {// catch error from server, creates an instance of object fromActions...
                return of(new fromActions.InitError(err));//operator of, creates an Observable type Action
              })
            );
          } else {
            return of(new fromActions.InitUnauthorized())
          }
        }
      )
    )
  );
}
