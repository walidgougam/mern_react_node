const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const colors = require('colors');
// const morgan = require('morgan');
// const transactions = require('./routes/transactions');
const connectDB = require('./config/db');
const exercicesRouter = require("./routes/exercices")
const usersRouter = require('./routes/users');

dotenv.config({
  path: './config/config.env',
});

connectDB();

//pour creer notre server express:
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // nous autorise a parse du json

// app.use('/api/v1/transactions', transactions);

app.use("/exercices", exercicesRouter)
app.use('/users', usersRouter);
app.listen(PORT);