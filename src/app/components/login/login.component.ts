import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){

    if(form.value.email == localStorage.getItem("email") && form.value.password == localStorage.getItem("password")) {
      this.router.navigate(['/dashboard']);

      let token = "1";
      localStorage.setItem("token", token);

    } else if(form.value.email == "") {
      alert(" *** Introduce un EMAIL ***")
    } else if(form.value.password == "") {
      alert(" *** Introduce una CONTRASEÑA ***")
    } else {
      alert(" *** ERROR -> Los DATOS introducidos son erróneos ***")
    }

  }

}
