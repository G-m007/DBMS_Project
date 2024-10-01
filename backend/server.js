const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'job_portal'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Secret for JWT
const jwtSecret = 'your_jwt_secret';

// Register Route (Signup)
app.post('/api/signup', (req, res) => {
  const { name, email, password, role } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;

    // Insert the user into the database
    const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, hash, role], (err, result) => {
      if (err) {
        return res.status(500).send('Error: User already exists or server error.');
      }
      res.status(201).send('User registered successfully!');
    });
  });
});

// Login Route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Fetch the user from the database
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(400).send('User not found.');
    }

    const user = results[0];

    // Compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (!isMatch) {
        return res.status(400).send('Incorrect password.');
      }

      // Generate JWT
      const token = jwt.sign(
        { user_id: user.user_id, role: user.role },
        jwtSecret,
        { expiresIn: '1h' }
      );

      res.status(200).json({ token, role: user.role });
    });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
