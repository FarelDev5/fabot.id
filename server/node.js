const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route untuk menerima data POST dari halaman HTML
app.post('/send-data', (req, res) => {
    const clientMessage = req.body.message;
    console.log('Client message:', clientMessage);

    // Kirim balasan ke client
    res.json({ reply: `Message received: ${clientMessage}` });
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
