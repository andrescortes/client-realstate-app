import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {NotificationService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-realstate-app';
  showSpinner: boolean = false;

  constructor(private fs: AngularFirestore,
              private notification: NotificationService) {
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


  onFilesChanged(urls: string | string[]): void {
    console.log('urls', urls);
  }

  onSuccess():void{
    this.notification.success("Success process!");
  }
  onError():void{
    this.notification.error("Error during process execution!");
  }
}
