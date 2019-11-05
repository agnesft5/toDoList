import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: string[] = [];

  tareaSeleccionada: number = -1;

  setTask(index:number){
    this.tareaSeleccionada = index;
  }

  addTask() {
    let task = (<HTMLInputElement>document.querySelector(".toDoInput")).value
    if (task != "") {
      this.tareas.push(task);
    }


    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem("tasks", JSON.stringify(this.tareas))
    }

    (<HTMLInputElement>document.querySelector(".toDoInput")).value = "";

  }

  deleteTask(): void {
    this.tareas.splice(this.tareaSeleccionada, 1);

    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem("tasks", JSON.stringify(this.tareas))
    }
  }

  constructor() {
    let savedToDos = JSON.parse(localStorage.getItem("tasks"));
    this.tareas = (savedToDos != null ? savedToDos : []);
  }


  ngOnInit() {
  }

}