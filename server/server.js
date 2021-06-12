const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  return res.status(200).json({ test: 'frontend connected to backend' });
});

// app.use('/', express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
