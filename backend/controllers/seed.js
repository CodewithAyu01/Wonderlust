require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const User = require("./models/user");
const { data: sampleListings } = require("./seeds/data.js"); // ✅ correct import

const dbUrl = process.env.MONGO_URI;

async function main() {
  await mongoose.connect(dbUrl);
  console.log("✅ MongoDB connected successfully for seeding");
}

main()
  .then(async () => {
    // Clear old data
    await Listing.deleteMany({});
    await User.deleteMany({});
    console.log("🧹 Old users & listings cleared");

    // Create a dummy user (Ayushi)
    const user = new User({ username: "Ayushi", email: "ayushi@example.com" });
    const registeredUser = await User.register(user, "ayushi123");
    console.log("👤 Dummy user created:", registeredUser.username);

    // ✅ Ensure sampleListings is defined and has data
    if (!sampleListings || !Array.isArray(sampleListings)) {
      throw new Error("❌ sampleListings is not defined or not an array!");
    }

    // Add this user's _id as owner for all listings
    const listingsWithOwner = sampleListings.map((listing) => ({
      ...listing,
      owner: registeredUser._id,
    }));

    // Insert listings
    await Listing.insertMany(listingsWithOwner);
    console.log("🌱 Listings seeded successfully!");

    mongoose.connection.close();
    console.log("🔒 Connection closed after seeding");
  })
  .catch((err) => {
    console.error("❌ Error seeding data:", err);
  });
