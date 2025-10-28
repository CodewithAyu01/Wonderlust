const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js"); // User model
const initData = require("./data.js"); // data array

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    await initDB(); // run after connection
  } catch (err) {
    console.log("Error connecting/seeding DB:", err);
  } finally {
    mongoose.connection.close();
    console.log("Connection closed");
  }
}

// Function to create default user if not exists
async function createDefaultUser() {
  let user = await User.findOne({ username: "admin" });
  if (!user) {
    user = new User({ username: "admin", email: "admin@example.com" });
    await User.register(user, "password123"); // set default password
    console.log("Default user created:", user.username);
  }
  return user;
}

async function initDB() {
  try {
    // Delete all listings first
    await Listing.deleteMany({});

    // Create default user
    const user = await createDefaultUser();

    // Add owner field to listings
    const listingsWithOwner = initData.data.map((obj) => ({
      ...obj,
      owner: user._id, // assign the default user
    }));

    // Insert new listings
    await Listing.insertMany(listingsWithOwner);
    console.log("Data was initialized successfully!");
  } catch (err) {
    console.log("Error initializing data:", err);
  }
}

main();
