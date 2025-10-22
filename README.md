# WanderLust - Travel Listings App

A Node.js web application for managing travel listings with user authentication, reviews, and image uploads.

## Features

- User authentication (signup, login, logout)
- Create, read, update, delete travel listings
- Add reviews to listings
- Image upload using Cloudinary
- Session management
- Input validation using Joi

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
1. Copy `env.example` to `.env`
2. Fill in your environment variables:
   - `ATLASDB_URL`: MongoDB connection string
   - `SECRET`: Session secret key
   - `CLOUD_NAME`: Cloudinary cloud name
   - `CLOUD_API_KEY`: Cloudinary API key
   - `CLOUD_API_SECRET`: Cloudinary API secret

### 3. Database Setup
Make sure MongoDB is running on your system or use MongoDB Atlas.

### 4. Seed Database (Optional)
```bash
npm run seed
```

### 5. Start the Application
```bash
npm start
```

The application will be available at `http://localhost:8080`

## Project Structure

- `app.js` - Main application file
- `models/` - Database models (User, Listing, Review)
- `controllers/` - Route handlers
- `routes/` - Express routes
- `middleware.js` - Custom middleware functions
- `schema.js` - Joi validation schemas
- `cloudConfig.js` - Cloudinary configuration
- `utils/` - Utility functions
- `views/` - EJS templates
- `public/` - Static assets (CSS, JS)

## Fixed Issues

- ✅ Fixed typo in directory name (`utlis` → `utils`)
- ✅ Added missing middleware imports in routes
- ✅ Fixed flash message typos
- ✅ Added proper error handling
- ✅ Fixed image upload functionality
- ✅ Made geometry field optional in listings
- ✅ Added proper population of reviews and owners
- ✅ Fixed user authentication checks in middleware
