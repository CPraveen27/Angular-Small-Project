import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  A!:string;
  B!:string;
  Result!:Number;

  constructor() { }

  ngOnInit(): void {
  }
  Division(){
    this.Result=parseInt(this.A)/parseInt(this.B);
  }
}

