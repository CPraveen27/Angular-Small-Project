import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
  A!:string;
  B!:string;
  Result!:number;

  constructor() { }

  ngOnInit(): void {}
    Subtraction(){
      this.Result=parseInt(this.A)-parseInt(this.B);
  }

}

