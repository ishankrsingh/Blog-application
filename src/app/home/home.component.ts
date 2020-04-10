//this is a be default statement . It is like headerfile in C++

import { Component, OnInit } from '@angular/core';

//This is know as decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//simple class
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
