const express = require('express');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/userRoutes.js');
const serviceProviderRoutes = require('./routes/serviceProviderRoutes.js')
// const authMiddleware = require('./middlewares/authMiddleware.js');
const cors = require('cors');


require('dotenv').config();

const app = express();

app.use(cors()); // Use CORS middleware
// Connect to Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.use('/api/serviceProvider',serviceProviderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});