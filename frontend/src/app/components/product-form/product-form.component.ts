import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  myForm: FormGroup;
  product: Product = new Product();

  constructor(private formBuilder: FormBuilder, private productoService: ProductService) {
    this.myForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required, Validators.minLength(12)]),
      pre: new FormControl('', [Validators.required, Validators.min(1)]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
      dest: new FormControl('', [Validators.nullValidator]),
    });
  }


  altaProduct() {
    this.product.image = "default.jpg";
    this.productoService.createProduct(this.product).subscribe({
      next: value => {
        alert(value.msg);
      }, error: err => {
        alert(err.msg);
      }
    });
  }
}
