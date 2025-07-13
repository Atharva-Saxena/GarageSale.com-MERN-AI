# GarageSale.com Server Documentation

## Overview
GarageSale.com is a smart community marketplace application that allows users to buy and sell items within their local community. This server-side application is built using Node.js, Express, and MongoDB, and it provides the backend functionality for the marketplace.

## Features
- **Authentication**: Secure user authentication with JWT.
- **Listings Management**: Create, update, delete, and fetch listings with filters and pagination.
- **Real-time Chat**: Chat functionality for users to communicate about listings using Socket.IO.
- **AI Integration**: Auto-generate item descriptions, detect scam likelihood, and categorize items using AI services.

## Folder Structure
```
/server
├── /controllers        # Business logic for handling requests
│   ├── authController.js
│   ├── listingController.js
│   └── chatController.js
├── /routes             # Express routes for API endpoints
│   ├── authRoutes.js
│   ├── listingRoutes.js
│   └── chatRoutes.js
├── /models             # Mongoose schemas for data models
│   ├── User.js
│   ├── Listing.js
│   └── Chat.js
├── /middlewares        # Middleware functions for request handling
│   ├── jwtMiddleware.js
│   ├── errorHandler.js
│   └── fileUpload.js
├── /services           # Utility functions for external services
│   ├── openaiService.js
│   ├── scamScoreService.js
│   └── categorizationService.js
├── /config             # Configuration files
│   ├── db.js
│   └── dotenv.js
├── app.js              # Main application setup
├── server.js           # Entry point to start the server
```

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd GarageSale.com/server
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the server directory and add your environment variables (e.g., MongoDB connection string, JWT secret).

4. **Run the server**:
   ```
   npm start
   ```

## API Endpoints
- **Authentication**:
  - `POST /api/auth/login`: Log in a user.
  - `POST /api/auth/register`: Register a new user.

- **Listings**:
  - `GET /api/listings`: Fetch all listings with optional filters.
  - `POST /api/listings`: Create a new listing.
  - `PUT /api/listings/:id`: Update an existing listing.
  - `DELETE /api/listings/:id`: Delete a listing.

- **Chat**:
  - `GET /api/chat/:listingId`: Fetch chat messages for a specific listing.
  - `POST /api/chat/:listingId`: Send a new chat message.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.