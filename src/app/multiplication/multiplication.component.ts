import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multliplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  A!:string;
  B!:string;
  Result!:Number;

  constructor() { }

  ngOnInit(): void {
  }
  Multiplication(){
    this.Result=parseInt(this.A)*parseInt(this.B);

}
}

