const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema= new Schema({
    title: {
        type: String,
        required: true,

    },
    description: String,
    image: {
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            set: (v) => v === "" ? "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" : v,
        },
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review"
      },
    ],
    owner:{
      type: Schema.Types.ObjectId,
      ref: "User"
    }, 
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false
        }
    }
});
listingSchema.post('findOneAndDelete', async (listing) =>{
    if (listing) {
        await Review.deleteMany({
            _id: {
                $in: listing.reviews
            }
        });
        
    }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;