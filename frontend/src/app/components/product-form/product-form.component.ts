import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  myForm: FormGroup;
  product: Product = new Product();

  constructor(private formBuilder: FormBuilder,
              private productoService: ProductService, private router: Router, private domSanitizer: DomSanitizer) {
    this.myForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required, Validators.minLength(12)]),
      pre: new FormControl('', [Validators.required, Validators.min(1)]),
      stock: new FormControl('', [Validators.required, Validators.min(1)]),
      dest: new FormControl('', [Validators.nullValidator]),
      img: new FormControl('', [Validators.required]),
    });
  }


  altaProduct() {
    this.productoService.createProduct(this.product).subscribe({
      next: value => {
        alert(value.msg);
        this.returnHome();
      }, error: err => {
        alert(err.msg);
        this.returnHome();
      }
    });
  }

  returnHome() {
    this.router.navigate(['products']);
  }
}
