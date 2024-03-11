import { Component } from '@angular/core';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {
  tasks: string[] = ['Task 1','Task 2','Task 3'];
}
