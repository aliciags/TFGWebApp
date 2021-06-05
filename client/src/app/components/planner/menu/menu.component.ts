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
  public active: MenuCard;
  public showModalAdd: boolean;
  public showModalDel: boolean;
  public showModalEdit: boolean;

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
    this.showModalAdd = false;
    this.showModalDel = false;
    this.showModalEdit = false;
    this.menu = {
      _id: '',
      _user: '',
      title: ''
    };
    this.active = {
      _id: '',
      _idMeal: '',
      recipes: [],
      day: '',
      meal: ''
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
        /*const r: string[] = [];
        let i = 0;
        console.log(meal.recipes.length);
        if (meal.recipes.length > 0 ) {
          for (i = 0; i < meal.recipes.length; i++ ) {
            this.apiService.get('/recipe/' + meal.recipes[i], this.httpOptions)
              .subscribe( response => {
                r.push(response.name);
                console.log(r);
                if ( (i + 1) === meal.recipes.length ) {
                  let c: MenuCard;
                  c = {
                    _id: d._id,
                    _idMeal: meal._id,
                    recipes: r,
                    day: d.day,
                    meal: meal.meal
                  };
                  this.card.push(c);
                }
            });
          }
        } else {
          console.log('hola');*/
          let c: MenuCard;
          c = {
            _id: d._id,
            _idMeal: meal._id,
            recipes: meal.recipes,
            day: d.day,
            meal: meal.meal
          };
          this.card.push(c);
        // }
      });
    });
  }

  expandRecipe(rid: string): void {
    this.router.navigateByUrl('recipe', {state: {id: rid}});
  }

  addRecipe(mealid: string): void{
    const body = {
      recipe: '60abe2524293963bd0141cde',
      edit: 'add'
    };
    this.apiService.put('/day/meal/' + mealid, body, this.httpOptions)
      .subscribe(response => {
        console.log(response);
        this.ngOnChanges();
    });
  }

  deleteRecipe(mealid: string, rid: string): void{
    const body = {
      recipe: rid,
      edit: 'delete'
    };
    this.apiService.put('/day/meal/' + mealid, body, this.httpOptions)
      .subscribe(response => {
        console.log(response);
        this.ngOnChanges();
    });
  }

  showEditModal(meal: MenuCard): void{
    this.showModalEdit = true;
    this.active = meal;
  }

}
