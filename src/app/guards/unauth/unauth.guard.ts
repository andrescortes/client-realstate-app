import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot, UrlSegment, UrlTree
} from '@angular/router';
import {filter, Observable, tap} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromRoot from 'src/app/store';
import * as fromUser from 'src/app/store/user';

import {map} from 'rxjs/operators';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router,
              private store: Store<fromRoot.State>) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }

  private check(): Observable<boolean> {
    return this.store.pipe(select(fromUser.getUserState)).pipe(
      filter(state => !state.loading),
      tap(state => {
        if (state.entity?.username) {
          this.router.navigate(['/']);
        }
      }),
      map(state => !state.entity?.username),//state with false
    )
  }

}
