const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('./config/db');
const authRouter = require('./routes/auth');
const noteRouter = require('./routes/note');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://notefront-5978.onrender.com', 
  optionsSuccessStatus: 200
}));

app.use(express.json());

app.use(authRouter);
app.use(noteRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
