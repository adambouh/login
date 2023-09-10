const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
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
//
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 21600000 , // Session expiration time in milliseconds (1 day)
    // Other cookie options as needed
  }
  // Other options as needed
}));
// Define routes for user operations (CRUD)
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
