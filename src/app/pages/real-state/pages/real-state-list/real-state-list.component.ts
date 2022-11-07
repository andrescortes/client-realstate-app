import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RealStateResponse } from '../../store/save';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../../store';
import * as fromList from '../../store/save';

@Component({
  selector: 'app-real-state-list',
  templateUrl: './real-state-list.component.html',
  styleUrls: ['./real-state-list.component.scss']
})
export class RealStateListComponent implements OnInit {
  loading$!: Observable<boolean | null>;
  realStates$!: Observable<RealStateResponse[] | null>;
  pictureDefault: string = 'https://firebasestorage.googleapis.com/v0/b/edificacion-app.appspot.com/o/image%2F1637099019171_O5986058_0.jpg?alt=media&token=0a146233-d63b-4702-b28d-6eaddf5e207a';

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new fromList.Read());
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.realStates$ = this.store.pipe(select(fromList.getRealStates));
  }

}
