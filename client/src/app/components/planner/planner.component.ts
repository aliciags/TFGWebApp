import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RecipeCard } from 'src/app/model/recipe-card';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ApiService } from 'src/app/service/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Menu } from 'src/app/model/menu';
import { Day } from 'src/app/model/day';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'],
  providers: [ LocalStorageService, ApiService ]
})
export class PlannerComponent implements OnInit {


  // public daysWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // public meals: string[] = ['Breakfast', 'Lunch', 'Diner'];
  // public card: RecipeCard[];
  public menus: Menu[];
  public days: Day[];
  public httpOptions = {
    headers: new HttpHeaders({
      'x-auth-token': 'token'
    })
  };

  /*public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      let i = 0;
      let j = 0;
      let c: RecipeCard;

      /*if (matches) {
        var i = 0, j=0;
        for(i=0; i<this.days.length; i++){
          for(j=0; j<this.meals.length; j++){
            let c = {
              day: this.days[i],
              meal: this.meals[j],
              cols: 1,
              rows: 1
            }
            this.card.push(c);
          }
        }
        return this.card;
      }

      for (i = 0; i < this.meals.length; i++){
        for (j = 0; j < this.daysWeek.length; j++){
          c = {
            recipe: 'Empty',
            day: this.daysWeek[j],
            meal: this.meals[i],
            cols: 1,
            rows: 1
          };
          this.card.push(c);
        }
      }
      return this.card;
    })
  );*/

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private localStorage: LocalStorageService,
              private apiService: ApiService) {
      // this.card = [];
      this.menus = [];
      this.days = [];
  }

  ngOnInit(): void {
    if (this.localStorage.get('token') == null){
      this.router.navigate(['/login']);
    } else {
      this.httpOptions.headers = this.httpOptions.headers.set('x-auth-token', this.localStorage.get('token'));
      this.apiService.get('/menu/user/' + this.localStorage.get('email'), this.httpOptions)
        .subscribe( response => {
          this.menus = response;
          if (this.menus.length > 0){
            this.getMenu(this.menus[0]._user, this.httpOptions);
          }
        },
        error => {
          if (error.error.msg === 'There are no menus for such user'){
            console.log(error);
          }
        });
    }
  }

  getMenu(id: string, options: object): void{
    this.apiService.get('/menu/' + id, options)
    .subscribe(response => {
      this.days = response;
    }, error => {
      if (error.error.msg === 'There is no such menu'){
        console.log(error);
      }
    });
  }

  addMenu(): void{
    this.router.navigate(['planner/menu-form']);
  }

  editMenu(): void{
    this.router.navigate(['planner/meal-form']);
  }

}
