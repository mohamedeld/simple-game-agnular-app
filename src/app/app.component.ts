import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-app';
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  onGameStarted(gameNum:number){
    if(gameNum %2 ===0){
      this.evenNumbers.push(gameNum)
    }else{
      this.oddNumbers.push(gameNum)
    }
  }

}
