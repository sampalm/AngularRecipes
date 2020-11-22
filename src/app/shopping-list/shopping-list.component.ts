import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingSrv: shoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingSrv.getIngredients();
    this.shoppingSrv.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
