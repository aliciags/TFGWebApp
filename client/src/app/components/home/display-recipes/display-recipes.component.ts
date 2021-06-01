import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-display-recipes',
  templateUrl: './display-recipes.component.html',
  styleUrls: ['./display-recipes.component.css']
})
export class DisplayRecipesComponent implements OnInit {

  @Input() recipes: Recipe[];
  @Input() environment: string;

  constructor(private router: Router) {
    this.recipes = [];
    this.environment = '';
  }

  ngOnInit(): void {
  }

  expandRecipe(rid: string): void {
    this.router.navigateByUrl('recipe', {state: {id: rid}});
  }

  onDelete(rid: string): void {

  }

}
