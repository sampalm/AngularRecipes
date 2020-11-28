import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetail: Recipe;
  id: number;

  constructor(private recipeSrv: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDetail = this.recipeSrv.getRecipe(this.id);
    })
  }

  onAddToShoppingList() {
    this.recipeSrv.toShoppingList(this.recipeDetail.ingredients);
  }

}
