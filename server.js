const express = require('express');
const app = express();
const path = require('path');

// Get Request
app.get('/', (req, res) => {
  // res.json('Ini adalah halaman index')
  res.sendFile(path.join(__dirname, 'index.html'));
});




// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // console.log('Server berjalan di port ' + port);
  console.log(`Server berjalan-jalan di port ${port} `);
});