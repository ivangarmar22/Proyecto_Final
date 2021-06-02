import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  colorFondo:boolean  = false;
  cambiarEstilo(){
      let styles= {
          'background-color': this.colorFondo ? '' : '#FFA93C',
      };
      return styles;
  }

}
