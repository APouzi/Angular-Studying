import { Component } from '@angular/core';
import {ButtonComponent} from './../button/button.component'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  title:string = "Title is here"

  toggleAddTask(){
    console.log("this was hit")
  }
  constructor(){}
}
