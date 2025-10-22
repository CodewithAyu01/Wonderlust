const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listings.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.get("/", listingController.index);
router.get("/new", isLoggedIn, listingController.renderNewForm);
router.post("/", isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing));
router.get("/:id", wrapAsync(listingController.showListing));
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));
router.put("/:id", isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing));
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;
