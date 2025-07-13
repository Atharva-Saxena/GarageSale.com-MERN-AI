# GarageSale.com Client Documentation

## Overview
GarageSale.com is a smart community marketplace application that allows users to buy and sell items in a user-friendly environment. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and incorporates various modern web technologies.

## Features
- User authentication with JWT
- Create, update, delete, and fetch listings
- Real-time chat functionality using Socket.IO
- AI-powered features for description generation and scam detection
- Responsive design using TailwindCSS and Framer Motion for animations

## Folder Structure
The client-side of the application is organized as follows:

```
client/
├── components/          # Reusable UI components
│   ├── Card.jsx        # Displays individual listings
│   ├── Navbar.jsx      # Navigation links
│   ├── Filters.jsx     # Filters for listings
│   └── ChatBox.jsx     # Real-time chat interface
├── features/           # Redux modules
│   ├── auth/           # Authentication-related actions and reducers
│   ├── listings/       # Listing management actions and reducers
│   └── chat/           # Chat-related actions and reducers
├── pages/              # Route-level views
│   ├── Home.jsx        # Landing page
│   ├── ListingDetails.jsx # Detailed view of a listing
│   ├── Login.jsx       # User login form
│   └── Register.jsx    # User registration form
├── hooks/              # Custom hooks
│   ├── useDebounce.js  # Debouncing functionality
│   └── useThrottle.js   # Throttling functionality
├── services/           # API service wrappers
│   └── api.js          # Axios API calls
├── styles/             # Styling files
│   ├── tailwind.config.js # TailwindCSS configuration
│   └── main.scss       # Main SASS styles
├── App.js              # Main application component
└── store.js            # Redux store setup
```

## Getting Started
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd GarageSale.com/client
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.