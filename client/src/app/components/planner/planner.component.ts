import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { RecipeCard } from 'src/app/model/recipe-card';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'], 
  providers: [ LocalStorageService ]
})
export class PlannerComponent implements OnInit {

  public days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public meals: string[] = ['Breakfast', 'Lunch', 'Diner'];
  public card: RecipeCard[];

  public cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      var i = 0, j=0;
      var c : RecipeCard;

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

      for(i=0; i<this.meals.length; i++){
        for(j=0; j<this.days.length; j++){
          c = {
            recipe: 'Empty',
            day: this.days[j],
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
    private router: Router,
    private localStorage: LocalStorageService) {
      this.card = [];
  }

  ngOnInit(): void {
    if(this.localStorage.get("token") == null){
      this.router.navigate(["/login"]);
    }
  }

}
