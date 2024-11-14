const app = require('./app');  // Import the app
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection failed:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
