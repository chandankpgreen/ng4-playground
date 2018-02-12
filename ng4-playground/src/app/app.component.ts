import { Component } from '@angular/core';
import { ProductService} from "./product-list/product.service";

@Component({
  selector: 'pm-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>

    <ul class='nav navbar-nav'>
      <li><a [routerLink]="['/welcome']">Welcome</a></li>
      <li><a [routerLink]="['/products']">Product List</a></li>
    </ul>
  </div>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
 
  `,
  providers:[ProductService]
})
export class AppComponent {
  pageTitle: string = "Acme Product Management";
}
