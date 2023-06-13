import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() fireEvent = new EventEmitter<number>();
  interval:any;
  lastNumber:number = 0;
  constructor() { }
  onStartGame(){
    this.interval = setInterval(()=>{
      this.fireEvent.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000)
  }
  onClearGame(){
    clearInterval(this.interval);
  }
}
