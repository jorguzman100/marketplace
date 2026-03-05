# 🛍️ Marketplace

### A MERN marketplace prototype with a storefront, admin panel, analytics, and Stripe checkout flow

This project is a full-stack marketplace app built with React + Express + MongoDB. It includes a customer shopping experience (browse, search, cart, checkout) and an admin workspace for managing products, categories, stores, sellers, and viewing dashboard charts.  
It feels like a practical e-commerce sandbox you can run locally, seed with sample data, and keep iterating on.



## ✨ Features

| | Feature | Why it matters |
|---|---|---|
| 🛒 | Customer storefront (home, category pages, product pages, search) | Covers the core shopping flow and makes it easy to demo catalog browsing. |
| 💳 | Stripe checkout with backend PaymentIntent route | Lets you test a real payment flow using Stripe test keys (frontend uses Stripe Elements). |
| 🧭 | Multi-step checkout with localStorage cart + progress guards | Cart state persists between pages and protects payment/confirmation route order. |
| 🧰 | Admin console for Products, Orders, Categories, Sellers, and Stores | Gives you one place to manage marketplace data from the UI. |
| 📊 | Dashboard charts (sales/store/order insights) | Adds analytics views using Chart.js for a more complete admin experience. |
| 🌗 | Theme toggle (light/dark) | Small UX touch that makes the app feel more polished. |



<p align="center">
  <img
    src="./client/public/Images/marketplace.webp"
    alt="Marketplace app screenshot"
    width="520"
    style="border-radius: 12px; box-shadow: 0 10px 28px rgba(16, 24, 40, 0.18); object-position: top;"
  />
</p>



## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![React_Bootstrap](https://img.shields.io/badge/React_Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)



## 🧩 Project Snapshot

- Backend: Express API + Mongoose models for `Consumer`, `Seller`, `Store`, `Product`, `Category`, and `Order`
- API routes: `/api/consumers`, `/api/login`, `/api/stores`, `/api/products`, `/api/productscat`, `/api/categories`, `/api/sellers`, `/api/orders`
- Payments: `POST /create-payment-intent` creates Stripe PaymentIntents based on cart items
- Frontend routes: customer storefront (`/home/...`), admin panel (`/admin`), and compact checkout flow (`/check/...`)
- Seed script: `npm run seed` resets and inserts sample data (products/orders)



## 🚀 Live Demo

<a href="https://marketplace.jorgeguzman.dev/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Live%20Demo-Marketplace-16a34a?style=for-the-badge" alt="Live Demo">
</a>

<a href="https://portfolio.jorgeguzman.dev/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Visit%20My%20Portfolio-jorgeguzman.dev-22c55e?style=for-the-badge" alt="Visit Portfolio">
</a>



## 💻 Run it locally

```bash
git clone https://github.com/jorguzman100/marketplace.git
cd marketplace
npm install
cp .env_example .env
cp client/.env_example client/.env
npm start
```

Optional sample data (this clears and reseeds product/order collections):

```bash
npm run seed
```

Local URLs:

- Frontend: `http://localhost:3000`
- API: `http://localhost:3001`

<details>
<summary>🔑 Required environment variables</summary>

```env
# .env (backend)
MONGODB_URI=mongodb://localhost/reactreadinglist
STRIPE_SECRET_KEY=sk_test_replace_me
PORT=3001
# client/.env (frontend)
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_replace_me
```
</details>



## 🤝 Contributors

- **Raul Alarcon**  ·  [@raul-ae](https://github.com/raul-ae)
- **Rodrigo Rosas**  ·  [@rodrigorosasv](https://github.com/rodrigorosasv)
- **Jorge Guzman**  ·  [@jorguzman100](https://github.com/jorguzman100)
