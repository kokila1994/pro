import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parent-child';
  updateTitle(name:string){
    this.title=name;
  }
  show1:any;
  
  
  
  isshow(){
    this.show1 =true;
  }
  ishide(){
    this.show1=false;
  }


  
}
