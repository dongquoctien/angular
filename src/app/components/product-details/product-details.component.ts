import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})


export class ProductDetailsComponent {
    products : Product[] | undefined;

    constructor(private productService: ProductService ){ }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
        this.getProducts();
    }

  getProducts() {
    this.productService.get().subscribe((data: Product[] ) => {
      console.log(data);
        this.products = data;
    })
  }
}
