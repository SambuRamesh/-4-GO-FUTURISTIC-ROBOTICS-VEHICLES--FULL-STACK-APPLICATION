const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1. 🔗 MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tiger',
  database: 'bikeApp'
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL');
});

// 2. 📩 Save feedback
app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO feedbacks (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.error('❌ Insert error:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, message: 'Feedback saved to MySQL!' });
  });
});

// ✅ 3. View all feedbacks
app.get('/feedbacks', (req, res) => {
  const sql = 'SELECT * FROM feedbacks ORDER BY createdAt DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Error fetching feedbacks:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json(results);
  });
});

// 4. ▶️ Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
