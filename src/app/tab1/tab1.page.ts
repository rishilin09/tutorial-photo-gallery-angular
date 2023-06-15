import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  date: string;
  type: string;
  selectedDate: string;
  list: {text: string, date: string}[] = [];
  constructor() { }


  onChange(event: any) {
    this.selectedDate = event._d.getDate();
    console.log(event._d.getDate());
  }


  setTodo(text: string){
    this.list.push({text: text, date: this.selectedDate});
  }


}
