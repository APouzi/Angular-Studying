import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent{
  //For angular 17, you need to do the: = ""
  @Input() text:string = "";
  @Input() color:string = "";
  @Output() btnClick = new EventEmitter()
  onClick() {
    this.btnClick.emit()
    console.log("hello")
   }
  constructor(){}
}
