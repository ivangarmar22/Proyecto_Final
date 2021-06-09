import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registro(form: NgForm){

    if(form.value.email == "" || form.value.password == "" || form.value.nombre == "") {
      alert(" *** ERROR -> Rellena los datos correctamente ***");
    } else {
      this.router.navigate(['/login']);
    }

  }

}
