import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-real-state-create',
  templateUrl: './real-state-create.component.html',
  styleUrls: ['./real-state-create.component.scss']
})
export class RealStateCreateComponent implements OnInit {
  loading$!: Observable<boolean | null>;
  photoLoaded!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  registerRealState(form: NgForm): void {

  }

  onFilesChanged(url: any): void {
    if (url) {
      this.photoLoaded = url;
    }
  }
}
