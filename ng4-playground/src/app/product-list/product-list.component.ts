import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = "cart";
  products: IProduct[] = [{
    "productId": 2,
    "productName": "Garder Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garage",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91-almuwslL._SL1500_.jpg"
  }, {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "MAY  21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Claw-hammer.jpg/1200px-Claw-hammer.jpg"
  }]
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit() {
  }

}
