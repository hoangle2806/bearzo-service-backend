const express = require('express');
const connectDB = require('./config/db');

// import routes
const userRoute = require('./routes/api/users');
const authRoute = require('./routes/api/auth');

const app = express();

// Connect Database
connectDB();

app.get('/', (req,res) => res.send('API running'))

// Define routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));