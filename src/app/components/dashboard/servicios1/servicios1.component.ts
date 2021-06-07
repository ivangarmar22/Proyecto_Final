import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios1',
  templateUrl: './servicios1.component.html',
  styleUrls: ['./servicios1.component.css']
})
export class Servicios1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  grupo1=false;
  subgrupo11=false;
  subgrupo12=false;
  subgrupo13=false;
  subgrupo14=false;
  subgrupo15=false;

  nombre_torneo = localStorage.getItem("nombre_torneo");
  deporte_torneo = localStorage.getItem("deporte_torneo");
  ciudad_torneo = localStorage.getItem("ciudad_torneo");
  participantes_torneo = localStorage.getItem("participantes_torneo");
  fecha_torneo = localStorage.getItem("fecha_torneo");

  nombre_comunidad = localStorage.getItem("nombre_comunidad");
  deporte_comunidad = localStorage.getItem("deporte_comunidad");
  ciudad_comunidad = localStorage.getItem("ciudad_comunidad");

}
