import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-realstate-app';
  showSpinner: boolean = false;

  constructor(private fs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.fs.collection("test").stateChanges().subscribe({
      next(persons) {
        console.log(persons.map(x => x.payload.doc.data()))
      }
    })
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }


}
