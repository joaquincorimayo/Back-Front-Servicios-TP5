import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {
  productList!: Array<Product>;

  constructor(private productService: ProductService) {
  }

  getProducts() {
    this.productService.getProductsDest().subscribe({
      next: value => {
        this.productList = new Array<Product>();
        let product: Product = new Product();
        value.forEach((e: any) => {
          Object.assign(product, e);
          this.productList.push(product);
          product = new Product();
        });
      }, error: err => {
        alert(err.message);
      }
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
