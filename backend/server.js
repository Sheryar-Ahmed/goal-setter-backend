const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const {errorHanlder} = require('./middlewares/errormiddleware');
const connectDB = require('./config/db');
connectDB();
const app = express();
//added as middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//other routes are in getRoutes file
app.use('/api/goals', require('./routes/getRoutes'));  // for goals
app.use('/api/users', require('./routes/userRoutes')); // for users
//it must be after all routes because error comes after we hit the route.
app.use(errorHanlder)

app.listen(port, () => console.log(`server is running on ${port}`))