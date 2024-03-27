import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit(){
    // let obs = new Observable((observer) => { observer.next(Math.random())}); 

    // const subject = new Subject();

    // // Subscribe 1
    //  subject.subscribe((data) => { console.log(data)});
    // // Subscribe 2
    // subject.subscribe((data) => { console.log(data)});

    // subject.next(Math.random());

  
    //URL for random get method api "https://randomuser.me/api/"
    //AJAX CALL

    const data = ajax('https://randomuser.me/api/');
    data.subscribe((res)=>{ console.log(res); });
    data.subscribe((res)=>{ console.log(res); });
    data.subscribe((res)=>{ console.log(res); });

  }
}
