import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {NotificationService} from './services';
import {select, Store} from '@ngrx/store';
import * as fromRoot from 'src/app/store';
import * as fromUser from 'src/app/store/user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-realstate-app';
  showSpinner: boolean = false;
  user$!: Observable<fromUser.UserResponse>;
  isAuthorized$!: Observable<boolean>;

  constructor(private fs: AngularFirestore,
              private notification: NotificationService,
              private store: Store<fromRoot.State>,
              private router: Router) {
  }

  ngOnInit(): void {
    /*    this.fs.collection("test").stateChanges().subscribe({
          next(persons) {
            console.log(persons.map(x => x.payload.doc.data()))
          }
        })*/
    this.user$ = this.store.pipe(select(fromUser.getUser)) as Observable<fromUser.UserResponse>;
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.store.dispatch(new fromUser.Init());//keep on session
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }


  onFilesChanged(urls: string | string[]): void {
    console.log('urls', urls);
  }

  onSuccess(): void {
    this.notification.success("Success process!");
  }

  onError(): void {
    this.notification.error("Error during process execution!");
  }

  onSignOut(): void {
    localStorage.removeItem('token');
    this.store.dispatch(new fromUser.SignOutEmail());
    this.router.navigate(['auth/login']).then(()=> this.notification.success("Log out success."))
  }
}
