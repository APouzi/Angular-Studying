import { Injectable } from '@angular/core';
import { Tasks } from '../components/mock-task';
import { Task } from '../components/Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Task[]{
    return Tasks
  }
}
