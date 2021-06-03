import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneos1',
  templateUrl: './torneos1.component.html',
  styleUrls: ['./torneos1.component.css']
})
export class Torneos1Component implements OnInit {

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
