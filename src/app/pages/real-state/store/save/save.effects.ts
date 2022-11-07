import * as fromActions from './save.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services';
import { Observable, of } from 'rxjs';
import { map, switchMap, delay, tap, catchError } from 'rxjs/operators';
import { RealStateCreateRequest, RealStateResponse } from './save.models';
import { environment } from '../../../../../environments/environment';

type Action = fromActions.All;

@Injectable()
export class SaveEffects {
  read: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),//actives request
      switchMap(() => this.httpClient.get<RealStateResponse[]>(`${environment.url}gateway/real-state`)
      .pipe(
        delay(1000),
        map((realStates: RealStateResponse[]) => new fromActions.ReadSuccess(realStates)),
        catchError((err) => of(new fromActions.ReadError(err.message))),
      )),
    ),
  );

  create: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.CREATE),//type action 'CREATE'
      map((action: fromActions.Create) => action.realState),//return Object type RealState
      switchMap((request: RealStateCreateRequest) =>
        this.httpClient.post<RealStateResponse>(`${environment.url}gateway/real-state`, request)
        .pipe(
          delay(1000),
          tap(() => {
            this.router.navigate(['real-state/list']).then();
          }),
          map((realState: RealStateResponse) => new fromActions.CreateSuccess(realState)),
          catchError(err => {
            this.notification.error(`Error saving real state: ${err.message}`);
            return of(new fromActions.CreateError(err.message));
          }),
        )),
    ))

  constructor(private actions: Actions,
              private httpClient: HttpClient,
              private router: Router,
              private notification: NotificationService) {
  }
}
