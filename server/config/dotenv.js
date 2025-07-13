require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};