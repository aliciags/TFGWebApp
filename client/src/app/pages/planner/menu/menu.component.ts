import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuCard } from 'src/app/core/model/menu-card';
import { Menu } from 'src/app/core/model/menu';
import { ApiService } from 'src/app/core/service/api.service';
import { Day } from 'src/app/core/model/day';
import { OnChanges } from '@angular/core';
import { Recipe } from 'src/app/core/model/recipe';
import { LocalStorageService } from 'src/app/core/service/local-storage.service';
import { Mealtime } from 'src/app/core/model/mealtime';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

  public daysWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public meals: string[] = ['Breakfast', 'Lunch', 'Diner'];
  public cards: MenuCard[];
  public days: Day[];
  public active: MenuCard;
  // public showModalAdd: boolean;
  // public showModalDel: boolean;
  public showModalEdit: boolean;

  @Input() menu: Menu;
  @Input() httpOptions: object;

  constructor(private localStorage: LocalStorageService,
              private apiService: ApiService,
              private router: Router) {
    this.cards = [];
    this.days = [];
    // this.showModalAdd = false;
    // this.showModalDel = false;
    this.showModalEdit = false;
    this.menu = {
      _id: '',
      _user: '',
      title: ''
    };
    this.active = {
      _id: '',
      _idMeal: '',
      recipes: [{
        _id: '',
        name: ''
      }],
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
      if (error.message === 'There is no such menu'){
        console.log(error);
      } else if (error.message === 'not a menu object id'){
        console.log(error);
      }
    });
  }

  async setDays(days: Day[]): Promise<void>{
    this.cards.splice(0, this.cards.length);
    days.forEach( d => {
      d.meals.forEach( meal => {
        const r = [{
          _id: '',
          name: ''
        }];
        meal.recipes.forEach(rid => {
          r.push({
            _id: rid,
            name: 'Recipe'
          });
        });

        let c: MenuCard;
        c = {
          _id: d._id,
          _idMeal: meal._id,
          recipes: r,
          day: d.day,
          meal: meal.meal
        };
        this.cards.push(c);
      });
    });

    let i = 0;
    let j = 0;
    for (i = 0; i < this.cards.length; i++){
      if ( this.cards[i].recipes.length > 0){
        for (j = 0; j < this.cards[i].recipes.length; j++){
          if (this.cards[i].recipes[j]._id !== ''){
            this.cards[i].recipes[j].name =  (await this.getRecipe(this.cards[i].recipes[j]._id)).name;
          }
        }
      }
    }
  }

  async getRecipe(rid: string): Promise<Recipe> {
    return this.apiService.get('/recipe/' + rid, this.httpOptions)
              .toPromise();
  }

  expandRecipe(rid: string): void {
    this.router.navigateByUrl('recipe', {state: {id: rid}});
  }

  editMeal(mealid: string, r: { _id: string; name: string; }[]): void{
    this.router.navigateByUrl('planner/meal-form', {state: {id: mealid, recipes: r}});
  }

  /*addRecipe(mealid: string, input: string): void{

    this.apiService.post('/filter', {name: input, user: this.localStorage.get('email')})
            .subscribe( response => {
              // console.log('r', response);
              // console.log(response[0]._id);
              const body = {
                recipe: response[0]._id,
                edit: 'add'
              };
              this.apiService.put('/day/meal/' + mealid, body, this.httpOptions)
                .subscribe(value => {
                  this.ngOnChanges();
              });
            }, error => {
              console.log(error);
            });
  }*/

  /*deleteRecipe(mealid: string, rid: string): void{
    const body = {
      recipe: rid,
      edit: 'delete'
    };
    this.apiService.put('/day/meal/' + mealid, body, this.httpOptions)
      .subscribe(response => {
        this.ngOnChanges();
    });
  }

  showEditModal(card: MenuCard): void{
    this.showModalEdit = true;
    this.active = this.cards.filter(c => c._idMeal === card._idMeal)[0];
    /*this.apiService.get('/day/menu/' + card._id, this.httpOptions)
    .subscribe(response => {
      const meal = response.meals.filter( (m: Mealtime) => m._id === card._idMeal)[0];
      this.active = {
          _id: card._id,
          _idMeal: card._idMeal,
          recipes: meal.recipes,
          day: d.day,
          meal: meal.meal
      };
    }, error => {
      if (error.message === 'There is no such menu'){
        console.log(error);
      } else if (error.message === 'not a menu object id'){
        console.log(error);
      }
    });
    // this.active = meal;
  }*/

}
