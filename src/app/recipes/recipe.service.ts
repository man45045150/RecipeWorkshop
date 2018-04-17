import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                [
                  new Ingredient('Meat',1),
                  new Ingredient('French Fries',20)
                ]),
    new Recipe('A Test Recipe2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                [
                  new Ingredient('Buns',2),
                  new Ingredient('Meat',1)
                ])
  ];
  constructor() { }
  getRecipes(){
    //slice new array because prevent access object from outside.
    return this.recipes.slice();
  }
}
