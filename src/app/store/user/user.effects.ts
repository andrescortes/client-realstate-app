import * as fromActions from './user.actions';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {NotificationService} from '../../services';
import {Router} from '@angular/router';
import {catchError, map, Observable, of, switchMap, tap} from 'rxjs';
import {UserResponse} from "./user.models";
import {environment} from "../../../environments/environment";

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
        this.httpClient.post<UserResponse>(`${environment.url}account/register/`, userData)
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
  )
}
