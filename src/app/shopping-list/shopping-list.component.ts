import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../share/ingredient.model';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub = new Subscription();

  constructor(private shoppingSrv: shoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingSrv.getIngredients();
    this.igChangeSub = this.shoppingSrv.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
