// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
require('./src/config/mongoose').connect(); // connect to DB first

const config = require('./src/config/config');
const { ErrorHandler } = require('./src/utils/error-handler');

// ✅ ROUTES
const userRoutes = require('./src/routes/user-routes');


// ✅ MIDDLEWARES – must be added early
app.use(cors());
app.use(bodyParser.json());

// ✅ Sample home route
app.get('/', (req, res) => {
  // res.send('hey dev your api is running...');
  res.json({ message: 'Hey dev your api is running...' });

});


// Example: if config.server.route = 'api' in .env → route becomes: /api/
app.use(`/${config.server.route}/user`, userRoutes);

// ✅ 404 handler (after all routes)
app.use((req, res, next) => {
  next(new ErrorHandler(404, 'Route not found'));
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    error: true,
    message: err.message || 'Something went wrong',
  });
});

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
