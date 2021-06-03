import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
  }

  usuario = localStorage.getItem("nombre");
  email = localStorage.getItem("email");

}
