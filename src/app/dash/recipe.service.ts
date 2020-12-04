import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from './recipe.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // 'recipe' is NOT a typo.
  private Recipes = this.db.collection('recipe');

  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}

  // What methods do we want to give recipe
  async createRecipe(data: Recipe) {
    const user = await this.auth.currentUser;
    return this.Recipes.add({
      ...data,
      user_id: user.uid,
    });
  }

  deleteRecipe(recipeId): Promise<void> {
    return this.Recipes.doc(recipeId).delete();
  }

  updateRecipe(data: Recipe, recipeId): Promise<void> {
    return this.Recipes.doc(recipeId).set(data);
  }

  getUserRecipes() {
    return this.auth.authState.pipe(
      // switchMap will cancel the subscription after it's passed through pipe
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Recipe>('recipe', (ref) =>
              ref.where('user_id', '==', user.uid)
            )
            // This unintuitively named function adds the doc id as 'id'
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  getRecipe(recipeId) {
    return this.Recipes.doc(recipeId).get();
  }
}
