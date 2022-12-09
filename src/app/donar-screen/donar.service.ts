import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonarService {

  food: any[] = [
    {name: "Food 1"},
    {name: "Food 2"},
    {name: "Food 3"},
    {name: "Food 4"},
    {name: "Food 5"}
  ];

  constructor() { }

  getUserFood(){
    return this.food;
  }

  deleteFood(name: string){
    this.food = this.food.filter(obj => obj.name != name);
    return this.food;

  }

}
