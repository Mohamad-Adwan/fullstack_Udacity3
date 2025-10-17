// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common'; // ✅ ضروري للـ *ngIf و *ngFor
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../../services/product.service';
// import { CartService } from '../../services/cart.service';
// import { Product } from '../../models/product.model';

// @Component({
//   selector: 'app-product-detail',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit {
//   product?: Product;

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService,
//     private cartService: CartService
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id) {
//       this.productService.getProductById(id).subscribe({
//         next: (data) => this.product = data,
//         error: (err) => console.error(err)
//       });
//     }
//   }

//   addToCart(product: Product): void {
//     this.cartService.addToCart(product);
//     alert(`${product.name} added to cart!`);
//   }
// }
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product?: Product; // يستقبل المنتج من الأب
  @Output() closeDetail = new EventEmitter<void>(); // يرسل حدث للاب عند الإغلاق

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  close(): void {
    this.closeDetail.emit(); // ارسال الحدث للأب ليعرف انه أغلق الابن
  }
}
