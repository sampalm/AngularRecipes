
import { Injectable } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';
import { shoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Recipe Test',
    'A test description',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
    [
      new Ingredient('Meat', 2),
      new Ingredient('French Fries', 15)
    ]
    ),
    new Recipe('Other Recipe Test',
    'A test description',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
    [
      new Ingredient('Rice', 1),
      new Ingredient('Eggs', 3)
    ]),
    new Recipe('Another Recipe Test',
    'A test description',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
      new Ingredient('Eggs', 2),
      new Ingredient('Onion', 3)
    ])
  ];

  constructor(private shoppingSrv: shoppingService){}

  getRecipes() {
    return this.recipes.slice(); // return a new copy of recipes
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  toShoppingList(ingredients: Ingredient[]){
    this.shoppingSrv.addIngredientsList(ingredients);
  }

}
