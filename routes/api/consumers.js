const router = require("express").Router();
const consumersController = require("../../controllers/consumersController");

// Matches with "/api/consumers"
router.route("/")
  .get(consumersController.findAll)
  .post(consumersController.create);

// Matches with "/api/consumers/:id"
// router
//   .route("/:id")
//   .get(consumersController.findById)
//   .put(consumersController.update)
//   .delete(consumersController.remove);

// Matches with "/api/consumers/:email"
router
  .route("/:email")
  .get(consumersController.findByEmail)
  .put(consumersController.update)
  .delete(consumersController.remove);

module.exports = router;
