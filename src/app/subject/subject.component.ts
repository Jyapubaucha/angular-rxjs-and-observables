import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit(){
    let obs = new Observable((observer) => { observer.next(Math.random())}); 

    // Subscribe 1
     obs.subscribe((data) => { console.log(data)});
    // Subscribe 2
    obs.subscribe((data) => { console.log(data)});

  }
}
