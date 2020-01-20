const express = require('express');
const connectDB = require('./config/db');
const connectPostGres = require('./config/postgres');

// import routes
const userRoute = require('./routes/api/users');
const authRoute = require('./routes/api/auth');
const productRoute = require('./routes/api/product');

const app = express();

// Connect Database
connectDB();
connectPostGres();

// Init middleware
app.use(express.json({ extended: false}));

app.get('/', (req,res) => res.send('API running'))

// Define routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));