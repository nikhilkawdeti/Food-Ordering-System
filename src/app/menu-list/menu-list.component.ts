import { Component } from '@angular/core';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent {
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

  ngOnInit() {
    let data = localStorage.getItem('dish');
    this.menuList = JSON.parse(data || '');
  }

  sendToCart() {
    // this.some = localStorage.getItem();
  }
}
