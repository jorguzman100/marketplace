const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// Stripe Route
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
/* router.use(function (req, res) {
  // console.log('routes / index / req: ', req);
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
}); */

module.exports = router;

/*
res.sendFile(path.join(__dirname, "../client/public/index.html"));
*/

/*
if (window.location.pathname === '/create-payment-intent') {
  console.log('window.location.pathname: ', window.location.pathname);
} else {
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
*/