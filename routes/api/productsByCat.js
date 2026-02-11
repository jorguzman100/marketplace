const router = require("express").Router();
const productsCategoryController = require("../../controllers/productsCategoryController");

// Matches with "/api/products"
router.route("/")
  .get(productsCategoryController.findAll)
  .post(productsCategoryController.create);

// Matches with "/api/products/:id"
// Matches with "/api/productscat/category/:param"
router
  .route("/:categoryName")
  .get(productsCategoryController.findByCategory)

module.exports = router;