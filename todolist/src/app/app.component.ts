import { Component, ElementRef, ViewChild } from '@angular/core';
import {formatDate } from '@angular/common';
import { fade, slideInOut } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fade,
    slideInOut,
  ]
})
export class AppComponent {
  title = 'My To Do List';
  todos = [
    {
      item:' drink coffee'
    },
    {
      item: 'prepare lunch'
    }
  ];
  
  @ViewChild('newToDo', {static:false})
  InputVar:ElementRef;
  today= new Date();
  todaysDataTime = '';
  constructor() {
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-GB');
  }

  clear(){
    this.InputVar.nativeElement.value="";
  }

  addToDo(newToDoItem){
      let newToDo = {
        item: newToDoItem
      };
      if (newToDoItem == "") {
        alert("Add Task")
      }else{
      this.todos.push(newToDo)
    }
    }
 
  delete(todo){
    this.todos=this.todos.filter(t => t.item !== todo.item);
  }
  
}
