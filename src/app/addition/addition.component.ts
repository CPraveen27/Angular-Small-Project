import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  A!:string;
  B!:string;
  Result!:Number;

  constructor() { }

  ngOnInit(): void {
  }
  Addition(){
    this.Result=parseInt(this.A)+parseInt(this.B);
  }
}
