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

  colorFondo:boolean  = false;
  cambiarEstilo(){
      let styles= {
          'background-color': this.colorFondo ? '#FFA93C' : '',
      };
      return styles;
  }

  logout(){
    this.router.navigate(['/login']);
    /*localStorage.removeItem('email');*/
  }

}
