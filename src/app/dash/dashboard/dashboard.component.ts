import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public word: string[] = ["A", "B", "C"];
  myControl: FormControl;
  name = new FormControl('');
  form: FormGroup

  options: string[] = ['One', 'Two', 'Three'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', []]
    })
  }
}
