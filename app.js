// app.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from current directory
app.use(express.static(__dirname));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});