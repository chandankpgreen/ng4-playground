import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
  private _productUrl = './products.json';
  constructor(private _http: HttpClient) { }

  
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .do(data => console.log("All: " + JSON.stringify(data))).catch(this.handleError);
     // .catch(this.handleEror);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
  } 
  // return [{
  //   "productId": 2,
  //   "productName": "Garder Cart",
  //   "productCode": "GDN-0023",
  //   "releaseDate": "March 18, 2016",
  //   "description": "15 gallon capacity rolling garage",
  //   "price": 32.99,
  //   "starRating": 4.2,
  //   "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91-almuwslL._SL1500_.jpg"
  // }, {
  //   "productId": 5,
  //   "productName": "Hammer",
  //   "productCode": "TBX-0048",
  //   "releaseDate": "MAY  21, 2016",
  //   "description": "Curved claw steel hammer",
  //   "price": 8.9,
  //   "starRating": 4.8,
  //   "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Claw-hammer.jpg/1200px-Claw-hammer.jpg"
  // }]
}


