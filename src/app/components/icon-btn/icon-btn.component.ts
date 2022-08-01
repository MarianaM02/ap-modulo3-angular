import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.css']
})
export class IconBtnComponent implements OnInit {
  
  @Input() type:string = ""

  @Output() btnClick = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onClick() {
    console.log("click")
  }
  
}
