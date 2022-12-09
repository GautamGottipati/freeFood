import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonarService } from './donar.service';

@Component({
  selector: 'app-donar-screen',
  templateUrl: './donar-screen.component.html',
  styleUrls: ['./donar-screen.component.css']
})
export class DonarScreenComponent implements OnInit {
  
  constructor(private route: Router, private donar: DonarService){}

  ngOnInit(): void {
    this.items = this.donar.getUserFood();
  }


  user: any = "<name>"

  items: any[];

  giveFood(){
    this.route.navigate(['/upload']);
  }

  removeFood(name: any){
    this.items = this.donar.deleteFood(name);
  }

}
