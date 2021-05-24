import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'], 
  providers: [ LocalStorageService ]
})
export class GroceriesListComponent implements OnInit {

  //sera un rry de ingredientes
  public ingredientsList: string[];

  constructor( private router: Router, 
    private localStorage: LocalStorageService) {
      this.ingredientsList = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3', 'Ingredient 4', 'Ingredient 5'];
   }

  ngOnInit(): void {
    if(this.localStorage.get("token") == null){
      this.router.navigate(["/login"]);
    }
  }

}
