const express = require('express');
const fs = require('fs');
const path = require('path');

const { clog } = require('./middleware/clog.js'); 

const app = express();

const PORT = process.env.PORT || 3001;

app.use(clog);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


const apiRoutes = require('./routes/apiRoutes.js'); 
const htmlRoutes = require('./routes/htmlRoutes.js'); 

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});