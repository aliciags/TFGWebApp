import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddIngredientComponent } from '../add-ingredient/add-ingredient.component';
import { CheckListComponent } from '../check-list/check-list.component';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css'], 
  providers: [ LocalStorageService ]
})
export class GroceriesListComponent implements OnInit {

  //sera un rry de ingredientes
  public ingredientsList: string[];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token' 
    })
  };

  constructor( private router: Router, 
    private localStorage: LocalStorageService, 
    private apiService: ApiService,
    private dialog: MatDialog) {
      this.ingredientsList = [];
   }

  ngOnInit(): void {
    if(this.localStorage.get("token") == null){
      this.router.navigate(["/login"]);
    }else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get("token"));
      this.apiService.get("/user/"+this.localStorage.get("email"), this.httpOptions)
      .subscribe(response => {
        this.ingredientsList = response.groceries;
      },
      error => {
        if(error.error.msg === "user not found"){ 
          this.router.navigate(["/notfound"]);
        } else {
          console.log("Internal server error");
        }
      });
    }
  }

  addIngredient(ingredient: string): void {
    let body = {};
    this.apiService.put("/user/ingredient/"+this.localStorage.get("email")+"&"+ingredient, body, this.httpOptions)
      .subscribe(response => {
        this.ingredientsList = response.groceries;
      },
      error => {
        if(error.error.msg === "user not found"){ 
          this.router.navigate(["/notfound"]);
        } else if(error.error.msg === "ingredient not found"){
          this.router.navigate(["/notfound"]);      
        }else {
          console.log("Internal server error");
        }
      });
  }

  shoppingDone(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CheckListComponent, dialogConfig);
  }

}
