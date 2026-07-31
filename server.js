const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_PATH = path.join(__dirname, 'data', 'db.json');

app.use(cors());
app.use(express.json());

// Serve static web files
app.use(express.static(__dirname));

// Read DB Helper
function readDB() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      return { users: [], orders: [], products: [] };
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading database file:", err);
    return { users: [], orders: [], products: [] };
  }
}

// Write DB Helper
function writeDB(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error("Error writing to database file:", err);
    return false;
  }
}

// API Route: Get all products
app.get('/api/products', (req, res) => {
  const db = readDB();
  res.json(db.products || []);
});

// API Route: User registration
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const db = readDB();
  
  // Check if username already exists
  const userExists = db.users.find(u => u.username.toLowerCase() === username.toLowerCase());
  if (userExists) {
    return res.status(400).json({ success: false, message: "Username is already taken." });
  }

  // Check if email already exists
  const emailExists = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (emailExists) {
    return res.status(400).json({ success: false, message: "Email is already registered." });
  }

  // Add user to database
  db.users.push({ username, email, password });
  writeDB(db);

  res.json({ success: true, message: "Account registered successfully!" });
});

// API Route: User login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password are required." });
  }

  const db = readDB();
  
  // Find user by username or email
  const user = db.users.find(u => 
    u.username.toLowerCase() === username.toLowerCase() || 
    u.email.toLowerCase() === username.toLowerCase()
  );

  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: "Invalid username/email or password." });
  }

  res.json({
    success: true,
    user: {
      username: user.username,
      email: user.email
    }
  });
});

// API Route: Get order history for a user
app.get('/api/orders/:username', (req, res) => {
  const { username } = req.params;
  const db = readDB();
  
  // Filter orders by matching username
  const userOrders = db.orders.filter(o => o.username.toLowerCase() === username.toLowerCase());
  res.json(userOrders || []);
});

// API Route: Submit new checkout order
app.post('/api/orders', (req, res) => {
  const { username, items, totals, date } = req.body;

  if (!username || !items || !totals) {
    return res.status(400).json({ success: false, message: "Invalid order data." });
  }

  const db = readDB();
  const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
  const orderId = `APX-${Date.now().toString().slice(-6)}-${randomHex}`;

  const newOrder = {
    orderId,
    username,
    items,
    totals,
    date: date || new Date().toISOString()
  };

  db.orders.push(newOrder);
  writeDB(db);

  res.json({ success: true, order: newOrder });
});

// Catch-all route to serve index.html for frontend SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(`  APEX GEAR E-COMMERCE SERVER RUNNING AT:          `);
  console.log(`  👉 http://localhost:${PORT}                      `);
  console.log(`===================================================`);
});
