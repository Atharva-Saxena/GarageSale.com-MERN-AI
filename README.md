# GarageSale.com

## Project Overview
GarageSale.com is a smart community marketplace application that allows users to buy and sell items in a user-friendly environment. The application leverages modern web technologies to provide a seamless experience for both buyers and sellers.

## Tech Stack
- **Frontend:** React, Redux, React Router, TailwindCSS, Axios, Framer Motion, SASS
- **Backend:** Node.js, Express, MongoDB (Atlas), JWT Authentication, Socket.IO (for chat), Cloudinary (for image uploads)
- **AI Features:** Description generation, scam score detection, categorization

## Features
- User authentication with JWT
- Create, update, delete, and fetch listings with filters and pagination
- Real-time chat functionality using Socket.IO
- Auto-generated item descriptions using AI
- Scam detection and item categorization using AI
- Mobile-responsive UI with animations using TailwindCSS and Framer Motion

## Folder Structure
```
GarageSale.com
├── client                # Frontend code
│   ├── components        # Reusable UI components
│   ├── features          # Redux modules for state management
│   ├── pages             # Route-level views
│   ├── hooks             # Custom hooks
│   ├── services          # API wrappers
│   ├── styles            # SASS and Tailwind styles
│   ├── App.js            # Main application component
│   └── store.js          # Redux store setup
└── server                # Backend code
    ├── controllers       # Business logic
    ├── routes            # Express routes
    ├── models            # Mongoose schemas
    ├── middlewares       # Middleware functions
    ├── services          # AI utilities
    ├── config            # Configuration files
    ├── app.js            # Express middleware and route linking
    └── server.js         # Starts the server
```

## Getting Started
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd GarageSale.com
   ```

2. **Install dependencies:**
   - For the client:
     ```
     cd client
     npm install
     ```
   - For the server:
     ```
     cd server
     npm install
     ```

3. **Set up environment variables:**
   Create a `.env` file in the server directory and add your MongoDB connection string and any other necessary environment variables.

4. **Run the application:**
   - Start the server:
     ```
     cd server
     node server.js
     ```
   - Start the client:
     ```
     cd client
     npm start
     ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.