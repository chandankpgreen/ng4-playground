import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 pageTitle: string = "Product Detail";
 product: IProduct;
 
  constructor(private _route: ActivatedRoute,
  private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
        "productId": 2,
        "productName": "Garder Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garage",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91-almuwslL._SL1500_.jpg"
    }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
