const express = require('express');
const app = express();
const PORT = 3000;

// Sample data - replace this with a database in a real application
const pirates = [
  { id: 1, name: 'Blackbeard' },
  { id: 2, name: 'Captain Kidd' },
  { id: 3, name: 'Anne Bonny' },
];

// Middleware to parse JSON in request bodies
app.use(express.json());

app.use(express.static('frontend/dist'));

// Endpoint to get the list of pirates
app.get('/api/pirates', (req, res) => {
  res.json(pirates);
});

// Endpoint to get a single pirate by id
app.get('/api/pirates/:id', (req, res) => {
  const pirateId = parseInt(req.params.id);
  const pirate = pirates.find((p) => p.id === pirateId);

  if (!pirate) {
    return res.status(404).json({ error: 'Pirate not found' });
  }

  res.json(pirate);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
