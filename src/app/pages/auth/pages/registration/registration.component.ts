import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as fromRoot from 'src/app/store';
import * as fromUser from 'src/app/store/user';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  loading$!: Observable<boolean | null>;

  constructor(private store: Store<fromRoot.State>) {

  }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
  }

  registerUser(form: NgForm) {
    if (form.valid) {
      const userCreateRequest: fromUser.UserCreateRequest = {
        name: form.value.name,
        lastname: form.value.lastname,
        username: form.value.username,
        phone: form.value.phone,
        email: form.value.email,
        password: form.value.password
      };
      this.store.dispatch(new fromUser.SignUpEmail(userCreateRequest))
    }
  }
}
