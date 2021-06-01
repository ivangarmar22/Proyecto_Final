import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
ciudad:string = "";
deporte:string = "";
equipos:string = "";
fecha:string = "";
nombre:string = "";

onSubmit(){
} 

}
