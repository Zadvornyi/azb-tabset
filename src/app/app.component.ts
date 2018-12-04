import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'azb-tab';

  tabChange(params:any){
    console.log(arguments, 'app module');
  }

  beforeCloseTab(event:any) {
    console.log(event, 'beforeCloseTab');
  }

  closeTab(event:any) {
    console.log(event, 'closeTab');
  }
}
