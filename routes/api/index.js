const router = require("express").Router();
const bookRoutes = require("./books");
const consumerRoutes = require("./consumers");
const sellerRoutes = require("./sellers");
const storeRoutes = require("./stores");
const productRoutes = require("./products");
const categoryRoutes = require("./categories");
const orderRoutes = require("./orders");
const productRoutesCat = require("./productsByCat");
const loginRoutes = require("./login");

// Book routes
router.use("/books", bookRoutes);



// Consumer routes
router.use("/consumers", consumerRoutes);


// Seller routes
router.use("/sellers", sellerRoutes);

// Store routes
router.use("/stores", storeRoutes);

// Product routes
router.use("/products", productRoutes);

//Product Categories routs
router.use("/productscat", productRoutesCat);

// Categories routes
router.use("/categories", categoryRoutes);

// Order routes
router.use("/orders", orderRoutes);

// Log In routes
router.use("/login", loginRoutes);

module.exports = router;







// ***** Consumer routes *****

/* USER STORIES
As a customer, I want to 
Browse a list of stores, so that I can filter by location or category
Browse a store web page, so that I can see products per category or price range
Have a shopping cart, so that I can save different products before buying
Have a signup page, so that I can Authenticate to buy products
Have a dashboard, so that I can see previous orders and status

*/ 

/* COLLECTIONS
- Consumer
- Seller
- Store
- Product
- Categories
- Order
*/

/* PAGES OR COMPONENTS

*/

// Landing page
// Just the index.html (already handled in routes/index.js)

// Gallery 


// Product detail

// Shopping cart

// Dashboard



// ***** Seller routes *****

// User authentication

// Registration form

// Data uploading

// Dashboard