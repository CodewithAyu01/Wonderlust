const sampleListings = [
  { title: "Cozy Beachfront Cottage", description: "Escape to this charming beachfront cottage for a relaxing getaway.", image: { filename: "beach_cottage", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 1500, location: "Malibu", country: "USA", geometry: { type: "Point", coordinates: [-118.7798, 34.0259] }, owner: { username: "Ayushi" } },
  { title: "Modern Loft in Downtown", description: "Stay in the heart of the city in this stylish loft apartment.", image: { filename: "downtown_loft", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 1200, location: "New York City", country: "USA", geometry: { type: "Point", coordinates: [-74.006, 40.7128] }, owner: { username: "Ayushi" } },
  { title: "Mountain Retreat", description: "Peaceful mountain cabin surrounded by nature.", image: { filename: "mountain_cabin", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 1000, location: "Aspen", country: "USA", geometry: { type: "Point", coordinates: [-106.8246, 39.1911] }, owner: { username: "Ayushi" } },
  { title: "Historic Villa in Tuscany", description: "Beautifully restored villa in Tuscany.", image: { filename: "tuscany_villa", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 2500, location: "Florence", country: "Italy", geometry: { type: "Point", coordinates: [11.2558, 43.7696] }, owner: { username: "Ayushi" } },
  { title: "Secluded Treehouse Getaway", description: "Unique treehouse retreat for nature lovers.", image: { filename: "treehouse_getaway", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 800, location: "Portland", country: "USA", geometry: { type: "Point", coordinates: [-122.6765, 45.5231] }, owner: { username: "Ayushi" } },
  { title: "Beachfront Paradise", description: "Condo with direct beach access.", image: { filename: "beachfront_paradise", url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 2000, location: "Cancun", country: "Mexico", geometry: { type: "Point", coordinates: [-86.8515, 21.1619] }, owner: { username: "Ayushi" } },
  { title: "Rustic Cabin by the Lake", description: "Cozy cabin for fishing and kayaking.", image: { filename: "rustic_cabin_lake", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 900, location: "Lake Tahoe", country: "USA", geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }, owner: { username: "Ayushi" } },
  { title: "Luxury Penthouse with City Views", description: "Penthouse apartment with panoramic city views.", image: { filename: "luxury_penthouse", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 3500, location: "Los Angeles", country: "USA", geometry: { type: "Point", coordinates: [-118.2437, 34.0522] }, owner: { username: "Ayushi" } },
  { title: "Ski-In/Ski-Out Chalet", description: "Ski chalet in Swiss Alps.", image: { filename: "ski_chalet", url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }, price: 3000, location: "Verbier", country: "Switzerland", geometry: { type: "Point", coordinates: [7.2261, 46.0963] }, owner: { username: "Ayushi" } },

  // --- Repeat similar structure with unique titles & coordinates up to 50 entries ---
];

while(sampleListings.length < 50){
  let n = sampleListings.length + 1;
  sampleListings.push({
    title: `Sample Listing ${n}`,
    description: `This is sample listing number ${n} added for seeding purposes.`,
    image: { filename: `sample_${n}`, url: `https://source.unsplash.com/random/800x600?sig=${n}` },
    price: 500 + n * 10,
    location: `Location ${n}`,
    country: "USA",
    geometry: { type: "Point", coordinates: [-100 + n, 35 + n] },
    owner: { username: "Ayushi" }
  });
}

module.exports = { data: sampleListings };
