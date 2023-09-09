const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/hotel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes for user operations (CRUD)
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
