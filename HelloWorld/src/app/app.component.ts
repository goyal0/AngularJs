import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="src\assets\images.jpg";

  ngOnInit():void{
    this.title = "Hello from BridgeLabz.";
  }
}
