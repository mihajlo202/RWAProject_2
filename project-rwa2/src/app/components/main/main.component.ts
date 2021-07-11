import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayLogIn:boolean;

  constructor() {
    this.displayLogIn = false;
   }

  ngOnInit(): void {
  }

  showLogInModal(): void {
    this.displayLogIn = true;
  }

  hideLogInModal(): void {
    this.displayLogIn = false;
  }
}
