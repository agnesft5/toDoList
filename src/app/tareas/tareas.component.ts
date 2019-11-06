import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas:string[]=["tarea1","tarea2","tarea3"]

  constructor() { }

  ngOnInit() {
  }

}
