import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-prep',
  templateUrl: './kitchen-prep.component.html',
  styleUrls: ['./kitchen-prep.component.scss'],
})
export class KitchenPrepComponent {
  menuList: any = [
    {
      name: 'Aloo Tikki',
      price: 30,
      image: '../assets/Aloo-Tikki-Chaat61-780x518.jpg',
    },
    {
      name: 'Vada Pao',
      price: 45,
      image: '../assets/iptadnn8_vada-pav_625x300_23_September_21.jpg',
    },
    {
      name: 'Dabeli ',
      price: 20,
      image: '../assets/Dabeli-recipe.jpg',
    },
    {
      name: 'Momos',
      price: 35,
      image: '../assets/momo_660_060817115337-sixteen_nine.jpg',
    },
    {
      name: 'Cholle Bhaturey',
      price: 30,
      image: '../assets/Chole-Bhature-Recipe.jpg',
    },
    {
      name: 'Poha Jalebi',
      price: 40,
      image: '../assets/poha-jalebi-poha-jalebi-125773393.jpg',
    },
    {
      name: 'Bikaneri Kachori',
      price: 20,
      image: '../assets/rajkachori-recipe.jpg',
    },
    {
      name: 'Jhal Muri Bhel',
      price: 20,
      image: '../assets/jhal-muri-masala-puffed-rice.jpg',
    },
  ];

  cartList: any = [];
  kitchenList: any = [];
  totalAmount: number = 0;
  totalCost: number = 0;

  dishName = '';
  dishPrice = 0;

  addToMenuList() {
    var obj = {
      name: this.dishName,
      price: this.dishPrice,
    };
    this.dishName = '';
    // console.log(obj);
    this.menuList.push(obj);
  }

  add(i: number) {
    this.cartList.push(this.menuList[i]);

    // this.totalAmount=0;

    for (let k = 0; k < this.cartList.length; k++) {
      this.totalAmount = this.totalAmount + this.cartList[k].price;
      console.log(this.totalAmount);
    }
  }

  delete(l: number) {
    this.cartList.splice(l, 1);
    this.totalAmount = 0;
    this.totalAmount = this.totalAmount - this.cartList[l].price;
    this.totalAmount = Math.abs(this.totalAmount);
  }

  proceedToBilling() {
    this.kitchenList = this.cartList;
    this.cartList = [];
  }

  clear() {
    this.cartList = [];
    this.kitchenList = [];
    this.totalAmount = 0;
  }
}
