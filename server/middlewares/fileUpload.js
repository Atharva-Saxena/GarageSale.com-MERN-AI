const multer = require('multer');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Use timestamp to avoid filename collisions
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Middleware to handle file uploads
const fileUpload = (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: 'File upload failed', error: err });
    }
    next();
  });
};

module.exports = fileUpload;