import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- MUST import
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,           // <-- standalone
  imports: [CommonModule, RouterModule], // <-- add CommonModule here
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get items(): Product[] {
    return this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
