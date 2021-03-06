import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
  }

  usuario = localStorage.getItem("nombre");
  email = localStorage.getItem("email");

  colorFondo:boolean  = false;
  cambiarEstilo(){
      let styles= {
          'background': this.colorFondo ? '#d4d4d4' : '',
      };
      return styles;
  }

}
