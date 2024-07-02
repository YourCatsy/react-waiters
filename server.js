const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint for health check
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Catch all handler to return the React app for any request not handled by the above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
