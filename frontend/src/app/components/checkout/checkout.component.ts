import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  name = '';
  address = '';
  payment = '';

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router
  ) {}

  onSubmit() {
    const items = this.cartService.getItems();
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
const orderData = {
  name: this.name,             // بدل customerName
  address: this.address,
  payment: this.payment,
  items: items.map(item => ({
    productId: item._id,       // افترض كل item فيه _id
    name: item.name,
    price: item.price,
    image: item.imageUrl
  })),
  totalPrice: items.reduce((sum, item) => sum + item.price, 0)
};


    this.orderService.createOrder(orderData).subscribe({
      next: (res) => {
        console.log('Order stored:', res);
        alert('✅ Order placed successfully!');
        this.cartService.clearCart();
        this.router.navigate(['/confirmation'], { state: { name: this.name } });
      },
      error: (err) => {
        console.error('Error saving order:', err);
        alert('❌ Failed to place order. Try again.');
      }
    });
  }
}
