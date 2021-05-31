import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { RecipeCard } from 'src/app/model/recipe-card';
import { Input } from '@angular/core';
import { Menu } from 'src/app/model/menu';
import { ApiService } from 'src/app/service/api.service';
import { Day } from 'src/app/model/day';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  public daysWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public meals: string[] = ['Breakfast', 'Lunch', 'Diner'];
  public card: RecipeCard[];
  public days: Day[];

  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
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
      }*/

      /*for (i = 0; i < this.meals.length; i++){
        for (j = 0; j < this.daysWeek.length; j++){
          c = {
            recipes: [],
            day: this.daysWeek[j],
            meal: this.meals[i],
            cols: 1,
            rows: 1
          };
          this.card.push(c);
        }
      }*/
      return this.card;
    })
  );

  @Input() menu: Menu;
  @Input() httpOptions: object;

  constructor(private breakpointObserver: BreakpointObserver,
              private apiService: ApiService,
              private router: Router) {
    this.card = [];
    this.days = [];
    this.menu = {
      _id: '',
      _user: '',
      title: ''
    };
    this.httpOptions = {};
  }

  ngOnInit(): void {
    this.getDays(this.menu._id, this.httpOptions);
  }

  ngOnChanges(): void{
    this.getDays(this.menu._id, this.httpOptions);
  }

  getDays(id: string, options: object): void{
    this.apiService.get('/day/menu/' + id, options)
    .subscribe(response => {
      this.days = response;
      this.setDays(this.days);
      // console.log(this.days);
    }, error => {
      if (error.error.msg === 'There is no such menu'){
        console.log(error);
      } else if (error.error.msg === 'not a menu object id'){
        console.log(error);
      }
    });
  }

  setDays(days: Day[]): void{
    /*let i = 0;
    let j = 0;

    for (i = 0; i < days.length; i++){
      for (j = 0; j < this.daysWeek.length; j++){
        let c: RecipeCard;
        c = {
          recipes: ,
          day: this.daysWeek[j],
          meal: this.meals[i],
          cols: 1,
          rows: 1
        };
        this.card.push(c);
      }
    }*/
    this.card.splice(0, this.card.length);
    days.forEach( d => {
      d.meals.forEach( meal => {
        let c: RecipeCard;
        c = {
          recipes: meal.recipes,
          day: d.day,
          meal: meal.meal,
          cols: 1,
          rows: 1
        };
        this.card.push(c);
      });
    });
  }


}
