import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter = 0;

  public changeCounter(type: boolean): void {
    type? this.counter++ : this.counter--;
  }

}
