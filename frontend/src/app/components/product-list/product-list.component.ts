// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ProductService } from '../../services/product.service';
// import { Product } from '../../models/product.model';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {
//   products: Product[] = [];

//   constructor(private productService: ProductService) {
//     this.productService.getProducts().subscribe({
//       next: (data) => this.products = data,
//       error: (err) => console.error(err)
//     });
//   }
// }
///////////////////////////////
// import { Component, OnInit } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ProductService } from '../../services/product.service';
// import { Product } from '../../models/product.model';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];
//   filteredProducts: Product[] = [];
//   searchTerm: string = '';

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//     this.productService.getProducts().subscribe({
//       next: (data) => {
//         console.log('Products from API:', data);
//         this.products = data;
//         this.filteredProducts = [...data];
//       },
//       error: (err) => console.error('Error fetching products:', err)
//     });
//   }

//   onSearchChange(value: string) {
//     this.searchTerm = value;
//     console.log('searchTerm:', value);

//     this.filteredProducts = this.products.filter(p => {
//       const name = (p as any).name || (p as any).title || '';
//       return name.toLowerCase().includes(value.trim().toLowerCase());
//     });

//     console.log('filteredProducts:', this.filteredProducts.length);
//   }
// }
////////////////////
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductDetailComponent } from '../product-detail/product-detail.component'; // ⬅️ استيراد الابن

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ProductDetailComponent], // ⬅️ إضافة الابن هنا
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  selectedProduct?: Product; // ⬅️ المنتج المختار

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Products from API:', data);
        this.products = data;
        this.filteredProducts = [...data];
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  onSearchChange(value: string) {
    this.searchTerm = value;
    console.log('searchTerm:', value);

    this.filteredProducts = this.products.filter(p => {
      const name = (p as any).name || (p as any).title || '';
      return name.toLowerCase().includes(value.trim().toLowerCase());
    });

    console.log('filteredProducts:', this.filteredProducts.length);
  }

  // ✅ لما المستخدم يختار منتج
  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  // ✅ لما الابن يرسل حدث الإغلاق
  onCloseDetail() {
    this.selectedProduct = undefined;
  }
}
