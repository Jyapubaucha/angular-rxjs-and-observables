import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-rxjs-and-observables';

  data: any[] = [];
   
  @ViewChild('createbtn')
  createBtn: ElementRef;
  createBtnObservable;

  array1 = [1,3,5,7,9];
  array2 = ['A','B','C','D','E'];

  //1. Creating a observable

  //Observable
  // myObservable = new Observable((observer) => {
  //   setTimeout(()=>{ observer.next(1); },1000);

  //   setTimeout(()=>{ observer.next(2); },2000);

  //   setTimeout(()=>{ observer.next(3); },3000);

  //   // setTimeout(()=>{ observer.error(new Error('Something went wrong. Please try again later.')); },  3000);

  //   setTimeout(()=>{ observer.next(4); },4000);

  //   setTimeout(()=>{ observer.next(5); },5000);

  //   setTimeout(()=>{ observer.complete(); },6000);

  // });


  //For RxJS of() operator
  // myObservable = of(this.array1, this.array2,20,30,'Deepak', true);

  //For RxJS from()
  // myObservable = from(this.array1)

  //For RxJS from() operator from promise method
  promiseData = new Promise((resolve, reject)=>{
    resolve([10,20,30,40,50]);
  });

  //For fromEvent() operator with promise
  // myObservable = from(this.promiseData)

  //For map method
    // myObservable = 2,,4,6,8,10
    // result = 10, 20, 30, 40, 50 which is multiplication by 5
  myObservable = from([2,4,6,8,10]);

  transferedObservable = this.myObservable.pipe(map((val)=>{
    return val * 5;
  }));

  GetAsyncData(){
      //Observer
      //next, error, complete

      // this.myObservable.subscribe((val: any) => {
      //   this.data.push(val);
      // },
      // (err)=>{ 
      //   alert(err.message);
      // },
      // () => {
      //   alert("All the data has been rendered completely!");
      // });

                      //ANOTHER METHOD for observer

      this.transferedObservable.subscribe({
        next: (val: any) => {
          this.data.push(val);
        },
        error(err){
          alert(err.message);
        },
        complete(){
          alert("All the data has been rendered completely!");
        }
      });
  }
  
  // buttonClicked(){
  //   let count = 0;
  //   this.createBtnObservable = fromEvent(this.createBtn.nativeElement,'click')
  //                             .subscribe((data)=>{
  //                                   console.log(data);
  //                                   this.showItem(count++);
  //                             });
  // }

  ngAfterViewInit() {
    // this.buttonClicked();
  }
  // showItem(val){
  //   let div = document.createElement('div');
  //   div.innerText = 'Item ' + val;
  //   div.className = 'data-list';
  //   document.getElementById('container').appendChild(div);
  // }
}
