import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deportes2',
  templateUrl: './deportes2.component.html',
  styleUrls: ['./deportes2.component.css']
})
export class Deportes2Component implements OnInit {

  selected = 'option2';
  
  constructor() { }

  ngOnInit(): void {
  }

  grupo1=false;
  subgrupo11=false;
  subgrupo12=false;
  subgrupo13=false;
  subgrupo14=false;
  subgrupo15=false;


}
