import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss'],
})
export class RecipePageComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private ls: LoadingService
  ) {}

  ngOnInit(): void {
    this.ls.isLoading = true;
    const recipeId = this.route.snapshot.paramMap.get('id');
    this.sub = this.recipeService.getRecipe(recipeId).subscribe((recipe) => {
      this.recipe = recipe;
      this.ls.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
