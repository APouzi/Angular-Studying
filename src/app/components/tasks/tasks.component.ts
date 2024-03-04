import { Component } from '@angular/core';
import { Tasks } from '../mock-task';
import { Task } from '../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //Here we are pulling from the tasks folder the three tasks we have. Then we are going to be importing them and inserting them as a property. Which will be looped over in the html file.
  tasks: Task[] = Tasks;
}
