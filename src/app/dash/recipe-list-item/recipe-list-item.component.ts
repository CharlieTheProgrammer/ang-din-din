import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;
  showEditor: boolean;
  isRecipeItemRoute: boolean = false;

  constructor(
    public recipeService: RecipeService,
    public router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.router.url.indexOf('/dashboard/recipes/') > -1)
      this.isRecipeItemRoute = true;
  }

  async deleteRecipe(recipeId) {
    try {
      await this.recipeService.deleteRecipe(recipeId);
      this.toast.recipeDeleted();
    } catch (error) {
      console.log(error);
      this.toast.systemError();
    }
  }
}
