import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromRoot from 'src/app/store';
import * as fromList from 'src/app/pages/real-state/store/save';

@Component({
  selector: 'app-real-state-create',
  templateUrl: './real-state-create.component.html',
  styleUrls: ['./real-state-create.component.scss'],
})
export class RealStateCreateComponent implements OnInit {
  loading$!: Observable<boolean | null>;
  photoLoaded!: string;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
  }

  registerRealState(form: NgForm): void {
    if (form.valid) {
      this.loading$ = this.store.pipe(select(fromList.getLoading));
      const realStateCreateRequest: fromList.RealStateCreateRequest = {
        name: form.value.name,
        picture: this.photoLoaded,
        price: form.value.price,
        address: form.value.address,
      };
      this.store.dispatch(new fromList.Create(realStateCreateRequest));
    }
  }

  onFilesChanged(url: any): void {
    if (url) {
      this.photoLoaded = url;
    }
  }
}
