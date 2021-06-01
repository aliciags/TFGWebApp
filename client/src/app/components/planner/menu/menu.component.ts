import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MenuCard } from 'src/app/model/menu-card';
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
  public card: MenuCard[];
  public days: Day[];

  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
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
    this.card.splice(0, this.card.length);
    days.forEach( d => {
      d.meals.forEach( meal => {
        let c: MenuCard;
        c = {
          _id: d._id,
          _idMeal: meal._id,
          recipes: meal.recipes,
          day: d.day,
          meal: meal.meal
        };
        this.card.push(c);
      });
    });
  }

  addRecipe(mealid: string): void{
    const body = {
      recipe: '60abe2524293963bd0141cde'
    };
    this.apiService.put('/day/meal/' + mealid, body, this.httpOptions)
      .subscribe(response => {
        console.log(response);
      });
  }

}
