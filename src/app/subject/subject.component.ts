import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit(){
    // let obs = new Observable((observer) => { observer.next(Math.random())}); 

    const subject = new Subject();

    // Subscribe 1
     subject.subscribe((data) => { console.log(data)});
    // Subscribe 2
    subject.subscribe((data) => { console.log(data)});

    subject.next(Math.random());
  }
}
