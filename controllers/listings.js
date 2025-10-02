const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const listings = await Listing.find({});
  res.render("listings/index", { listings });
};

module.exports.showListing = async (req, res) => {
  // Populate owner to get username
  const listing = await Listing.findById(req.params.id).populate("owner");
  if (!listing) {
    req.flash("error", "Cannot find that listing!");
    return res.redirect("/listings");
  }
  res.render("listings/show", { listing });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

module.exports.createListing = async (req, res) => {
  const listing = new Listing(req.body.listing);
  listing.owner = req.user._id;
  await listing.save();
  req.flash("success", "Successfully made a new listing!");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.renderEditForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Cannot find that listing!");
    return res.redirect("/listings");
  }
  res.render("listings/edit", { listing });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Successfully updated listing!");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted listing");
  res.redirect("/listings");
};
