import { Output } from '@angular/core';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/core/model/recipe';

@Component({
  selector: 'app-display-recipes',
  templateUrl: './display-recipes.component.html',
  styleUrls: ['./display-recipes.component.css'],
})
export class DisplayRecipesComponent implements OnInit {

  @Input() recipes: Recipe[];
  @Input() environment: string;
  @Output() deleteRecipe = new EventEmitter();
  @Output() saveRecipe = new EventEmitter();

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
    this.deleteRecipe.emit(rid);
  }

  onSave(rid: string): void {
    this.saveRecipe.emit(rid);
  }

}
