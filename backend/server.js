const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// A simple test API route
app.get('/api/greeting', (req, res) => {
    res.json({ message: "Hello from the Node.js backend!" });
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});