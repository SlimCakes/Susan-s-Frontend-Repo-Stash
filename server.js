const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when the root is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

// Route for the second HTML file (about.html)
app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'About.html'));
});

// Route for the third HTML file (about.html)
app.get('/work.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Work.html'));
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
