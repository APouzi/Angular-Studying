import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  //Here we are pulling from the tasks folder the three tasks we have. Then we are going to be importing them and inserting them as a property. Which will be looped over in the html file.
  tasks: Task[] = [];
  constructor(private taskService: TaskService){

  }

  ngOnInit():void{
    //usually we want to use obserables for getting from server, but this is a good example.
    this.tasks = this.taskService.getTasks()
  }
}
