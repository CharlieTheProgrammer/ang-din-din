import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private primaryPanelClass: string[] = ['text-white'];
  private accentPanelClass: string[] = ['text-white'];
  private warningPanelClass: string[] = ['bg-red-500', 'text-white'];

  constructor(private toast: MatSnackBar) {}

  // Messages below
  permissionDenied(): MatSnackBarRef<any> {
    this.toast.open('Permission Denied', null, {
      panelClass: this.warningPanelClass
    })
    return this.toast._openedSnackBarRef;
  }

  systemError(): MatSnackBarRef<any> {
    this.toast.open('Oops, something went wrong. Please try again and if the issue re-occurs, contact Support.', null, {
      panelClass: this.warningPanelClass
    })
    return this.toast._openedSnackBarRef;
  }

  recipeDeleted(): MatSnackBarRef<any> {
    return this.toast.open("Recipe deleted successfully!", null, {
      panelClass: this.primaryPanelClass
    });
  }
}
