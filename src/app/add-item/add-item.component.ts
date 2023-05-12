import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalService } from '../service/local.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {
  addDishForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addDishForm = formBuilder.group({
      dishName: [''],
      dishPrice: [''],
      dishImage: [''],
    });
  }

  addDishList = [];
  addToMenuList() {
    this.addDishForm.reset();
    this.addDishList.push();
    localStorage.setItem('dish', JSON.stringify(this.addDishList));
  }
}
