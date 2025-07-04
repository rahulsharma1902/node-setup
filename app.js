// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
require('./src/config/mongoose').connect();

const errorHandler = require('./src/utils/error-handler');

const PORT = process.env.PORT || 5000;


// ----------------------------Middleware for catching 404 and forward to error handler
// app.use((req, res, next) => {
//   const error = new Error(errorHandler.ERROR_404);
//   error.statusCode = 4404;
//   next(error);
// });


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/', (req, res) => {
  res.send('hey dev your api is running...');
});




// Routes placeholder
// app.use('/api/lawyers', require('./routes/lawyersRoute'))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
