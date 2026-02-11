const router = require("express").Router();
const sellersController = require("../../controllers/sellersController");

// Matches with "/api/sellers"
router.route("/")
  .get(sellersController.findAll)
  .post(sellersController.create);

// Matches with "/api/sellers/:id"
router
  .route("/:id")
  .get(sellersController.findById)
  .put(sellersController.update)
  .delete(sellersController.remove);

module.exports = router;