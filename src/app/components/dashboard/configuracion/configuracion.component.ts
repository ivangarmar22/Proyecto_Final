import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})

export class ConfiguracionComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {  
    config.backdrop = 'static';
    config.keyboard = false; 
  }

  ngOnInit() { }

  usuario = localStorage.getItem("nombre");
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");

  hoy = new Date();
  horas = this.hoy.getHours() + ':' + this.hoy.getMinutes() + ':' + this.hoy.getSeconds();
  fecha = this.hoy.getDate() + '-' + (this.hoy.getMonth() + 1) + '-' + this.hoy.getFullYear();  

  open(content) {
    this.modalService.open(content);
  }

}

