import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  primaryPanelClass: string[] = ['text-white'];
  accentPanelClass: string[] = ['text-white'];
  warningPanelClass: string[] = ['bg-red-500', 'text-white'];

  constructor(private toast: MatSnackBar) {}

  // Messages below
  permissionDenied(): MatSnackBarRef<any> {
    this.toast.open('Permission Denied', null, {
      panelClass: this.warningPanelClass
    })
    return this.toast._openedSnackBarRef;
  }
}
