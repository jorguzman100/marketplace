const router = require("express").Router();
const consumersController = require("../../controllers/logInControllers");

// Matches with "/api/consumers"
router.route("/")
  .get(consumersController.findAll)
  .post(consumersController.findByEmail);

module.exports = router;