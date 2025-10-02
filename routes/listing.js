const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listings.js");

router.get("/", listingController.index);
router.get("/new", listingController.renderNewForm);
router.post("/", listingController.createListing);
router.get("/:id", listingController.showListing);
router.get("/:id/edit", listingController.renderEditForm);
router.put("/:id", listingController.updateListing);
router.delete("/:id", listingController.destroyListing);

module.exports = router;
