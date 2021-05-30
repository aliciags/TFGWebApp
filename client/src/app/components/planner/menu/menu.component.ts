import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { RecipeCard } from 'src/app/model/recipe-card';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public daysWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public meals: string[] = ['Breakfast', 'Lunch', 'Diner'];
  public card: RecipeCard[];
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
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) {
    this.card = [];
  }

  ngOnInit(): void {
  }

}
