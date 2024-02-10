const express = require('express');
const crypto = require('crypto');
const Pool = require('pg').Pool

const app = express();
const PORT = 3000;

const pool = new Pool({
  user: 'app',
  host: 'localhost',
  database: 'app_db',
  password: 'pass',
  port: 5432,
})

const hash = crypto.createHash('sha256');

function generateDay() {
  // Get current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().slice(0, 10); 
  return currentDate;
}

function generateIntegerForDay(currentDate, listLength) {
  const seed = `${currentDate}${listLength}`; 
  const hash = hash.update(seed).digest('hex');
  return parseInt(hash.slice(0, 8), 16);
}

function getPuto(putos, generatedInteger) {
  return putos[generatedInteger % putos.length];
}

// Sample data - replace this with a database in a real application
const PUTOS = [
  { id: 1, name: 'Pablo' },
  { id: 2, name: 'Jorge' },
  { id: 3, name: 'German' },
  { id: 4, name: 'Franco' },
  { id: 5, name: 'Marcelo' },
  { id: 6, name: 'Cristian' },
];

// Middleware to parse JSON in request bodies
app.use(express.json());

app.use(express.static('frontend/dist'));

// Endpoint to get the list of pirates
app.get('/api/putos', (req, res) => {
  res.json(PUTOS);
});

// Endpoint to get a single pirate by id
app.get('/api/putos/today', (_, res) => {
  const date = generateDay();
  const generatedInteger = generateIntegerForDay(date, PUTOS.length);
  const todayPuto = getPuto(PUTOS, generatedInteger);

  res.json(todayPuto);
});

app.get('/api/cowboys', (_, res) => {
  pool.query('SELECT * FROM cowboys ORDER BY name', (error, results) => {
    if (error) {
      throw error
    }
    res.json(results.rows);
  });  
});

app.get('/api/cowboys/day', (_, res) => {
  pool.query('SELECT * FROM cowboys ORDER BY name', (error, results) => {
    if (error) {
      throw error
    }

    const putos = results.rows;

    const date = generateDay();
    const generatedInteger = generateIntegerForDay(date, putos.length);
    const todayPuto = getPuto(putos, generatedInteger);
  
    res.json(todayPuto);
  });  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function runLoopForDays(numDays) {
  const currentDate = new Date();
  
  for (let i = 0; i < numDays; i++) {
    const currentDay = new Date(currentDate);
    currentDay.setDate(currentDate.getDate() + i);

    const dd = currentDay.toISOString().slice(0, 10); 
    
    const generatedInteger = generateIntegerForDay(dd, putos.length);
    const todayPuto = getPuto(generatedInteger);
    
    console.log(`---- Generated Integer for ${dd}`, todayPuto);
  }
}

// Example: Run the loop for the next 5 days
const numDaysToRun = 5;
runLoopForDays(numDaysToRun);