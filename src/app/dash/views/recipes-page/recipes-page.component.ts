import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss']
})
export class RecipesPageComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  sub: Subscription;

  constructor(private recipeService: RecipeService, public ls: LoadingService) { }

  ngOnInit(): void {
    this.ls.isLoading = true;
    this.sub = this.recipeService.getUserRecipes().subscribe(recipes => {
      this.recipes = recipes;
      this.ls.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
