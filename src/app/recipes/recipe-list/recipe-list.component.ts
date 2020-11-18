import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Test', 'A test description', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('Other Recipe Test', 'A test description', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('Another Recipe Test', 'A test description', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg')
  ];

  @Output() selectedRecipeDetail = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onShowRecipeDetail(recipe: Recipe){
    this.selectedRecipeDetail.emit(recipe);
  }

}
