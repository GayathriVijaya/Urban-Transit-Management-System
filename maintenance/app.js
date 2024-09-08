const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const db = require(path.join(__dirname, '..', 'database'));  

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit-ticket', (req, res) => {
    const { operatorid, issue } = req.body;
    const stmt = db.prepare("INSERT INTO tickets (operatorId, Issue) VALUES (?, ?)");
    stmt.run(operatorid, issue, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error inserting ticket' });
        }
        res.json({ message: 'Ticket submitted successfully!' });
    });
    stmt.finalize();
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
