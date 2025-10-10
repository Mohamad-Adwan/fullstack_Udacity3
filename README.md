# 🛒 Simple Store - Angular + Node.js + MongoDB

Simple Store is a basic e-commerce project where users can browse products, add them to a cart, and place orders that are stored in MongoDB. This project uses Angular for the frontend and Node.js + Express + Mongoose for the backend.

---

## Features
- Display products with images and prices  
- Cart management: Add,  Clear items  
- Checkout page with customer information and payment method  
- Orders are stored in MongoDB  
- Order confirmation page  

---

## Requirements
- Node.js ≥ 18  
- npm or yarn  
- MongoDB (local or Atlas)  
- Angular CLI ≥ 18  

---

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohamad-Adwan/fullstack_Udacity3
   cd my-store
---

## 🛠 Tech Stack
- **Node.js** + **Express**
- **MongoDB**
- **Angular CLI**

---
```
my-store/
├── backend/                  # Backend server (Node.js + Express)
│   ├── models/               # Mongoose models
│   │   └── Order.js
│   │   └── Product.js
│   ├── routes/               # API routes
│   │   └── orderRoutes.js
│   │   └── productRoutes.js
│   ├── controllers/          # Controller logic
│   │   └── orderController.js
│   │   └── productController.js
│   ├── server.js             # Main server entry point
│   └── package.json
│
├── frontend/                 # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── checkout.component.ts
│   │   │   │   ├── checkout.component.html
│   │   │   │   ├── checkout.component.css
│   │   │   │   ├── product-detail.component.ts
│   │   │   │   ├── product-detail.component.html
│   │   │   │   ├── product-detail.component.css
│   │   │   │   ├── product-list.component.ts
│   │   │   │   ├── product-list.component.html
│   │   │   │   ├── product-list.component.css
│   │   │   │   ├── confirmation.component.ts
│   │   │   │   ├── confirmation.component.html
│   │   │   │   └── confirmation.component.css
│   │   │   ├── services/
│   │   │   │   ├── cart.service.ts
│   │   │   │   └── order.service.ts
│   │   │   │   └── product.service.ts
│   │   │   ├── app.module.ts
│   │   │   └── app-routing.module.ts
│   │   ├── assets/
│   │   └── index.html
│   ├── angular.json
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json              # Optional root package.json if monorepo

```

---
## My Mongoo
### Order
```
const simpleOrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  payment: { type: String, required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      image: String
    }
  ],
  totalPrice: { type: Number, default: 0 },
}, { timestamps: true });
```
### Product
```
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true, default: 0 },
  imageUrl: { type: String },
  countInStock: { type: Number, default: 0 }
}, { timestamps: true });
```



## API Endpoints 
#### Order
- addOrder 

#### Product
- getProducts
- getProductById
- createProduct


## Data Shapes
#### Product
- name
- description
- price
- imageUrl
- countInStock

#### Orders
- name
- address
- payment
- items
- totalPrice


