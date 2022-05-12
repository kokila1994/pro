import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() DataUpdateEvent = new EventEmitter<string>() 
  @Input() show: boolean=false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
