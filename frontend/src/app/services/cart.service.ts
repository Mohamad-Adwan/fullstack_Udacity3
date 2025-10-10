import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() {
    this.loadFromLocalStorage(); // تحميل العناصر عند إنشاء الخدمة
  }

  addToCart(product: Product): void {
    this.items.push(product);
    this.saveToLocalStorage();
  }

  getItems(): Product[] {
    // تحميل آخر نسخة عند كل طلب
    this.loadFromLocalStorage();
    return this.items;
  }

  clearCart(): void {
    this.items = [];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  private loadFromLocalStorage(): void {
    const stored = localStorage.getItem('cart');
    this.items = stored ? JSON.parse(stored) : [];
  }
}
