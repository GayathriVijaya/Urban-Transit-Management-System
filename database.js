const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./DB.db', (err) => {
    if (err) {
        console.error('Error connecting to SQLite DB:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

module.exports = db;

// // database.js
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const dbPath = path.resolve(__dirname, 'database.db'); // Adjust path as needed
// const db = new sqlite3.Database(dbPath);

// module.exports = db;

