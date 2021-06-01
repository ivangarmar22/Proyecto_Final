import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colorFondo:boolean  = false;
  cambiarEstilo(){
      let styles= {
          'background-color': this.colorFondo ? '#FFA93C' : '',
      };
      return styles;
  }

  logout(){
    localStorage.removeItem('email');
  }

}
